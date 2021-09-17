
document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    const makeRequest = (typeOfReq, distination, body) =>{
        if(typeOfReq === "GET"){
            return fetch(distination, {method: typeOfReq, mode: 'cors'});
        } else if (typeOfReq === "DELETE"){
            return fetch(distination, {method: typeOfReq, mode: 'cors'});
        }
        else {
            return fetch(distination, {
                method: typeOfReq,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                mode: 'cors',
                body: body
            });
        }
    };

    const createTable = data => {
        let listOfTypes = new Set();
        const tbody = document.getElementById('tbody');
        tbody.textContent = "";
        data.forEach(item => {
            tbody.insertAdjacentHTML('beforeend', `
                <tr class="table__row">
						<td class="table__id table__cell">${item.id}</td>
						<td class="table-type table__cell">${item.type.trim()}</td>
						<td class="table-name table__cell">
							${item.name.trim()}
						</td>
						<td class="table-units table__cell">
							${item.units}
						</td>
						<td class="table-cost table__cell">
							${item.cost}
						</td>
						<td>
							<div class="table__actions table__cell">
								<button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
								</button>
								<button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
								</button>
							</div>
						</td>
					</tr>
            `);
            listOfTypes.add(item.type.trim());
        });
        return listOfTypes;
    }
    const filterByType = (data, type) => {
        data = data.filter(item => item.type.trim() === type);
        createTable(data);
    };

    const createTypesList = (listOfTypes, data) => {
        const selectType = document.getElementById('typeItem');
        selectType.textContent = "";
        selectType.insertAdjacentHTML('beforeend', `
            <option value="Все услуги">Все услуги</option>
        `);
        listOfTypes = [...listOfTypes].sort();
        listOfTypes.forEach(item => {
            selectType.insertAdjacentHTML('beforeend', `
                <option value="${item}">${item}</option>
            `);
        });
        selectType.addEventListener('change', () => {
            filterByType(data, selectType.value);
        });
    }

    const update = async () => {
        let data = await makeRequest("GET", "http://localhost:3000/api/items")
            .then(resp => resp.json())
            .catch(err => console.error(err));
    
        createTypesList(createTable(data), data);
    };

    const addListeners = () => {
        const addBtn = document.querySelector('.btn-addItem'),
            modal = document.getElementById('modal'),
            form = modal.querySelector('form'),
            modalHead = modal.querySelector('.modal__header'),
            tbody = document.getElementById('tbody');

        let flagType = "POST",
            dist = "http://localhost:3000/api/items";

        
        addBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
            flagType = "POST";
            dist = "http://localhost:3000/api/items";
            modalHead.textContent = "Добавение новой услуги";
        });

        modal.addEventListener('click', e => {
            if(e.target.closest('.button__close') || e.target.closest('.cancel-button') || e.target.matches('.modal__overlay')){
                modal.querySelector('form').reset();
                modal.style.display = "none";
            }
        });

        form.addEventListener('submit', e => {
            e.preventDefault();
            e.stopPropagation();
            const formData = new FormData(e.target);
            const data = JSON.stringify(Object.fromEntries(formData));
            makeRequest(flagType, dist, data)
                .then(update)
                .then(() => {
                    modal.style.display = "none";
                    form.reset();
                })
                .catch(err => console.error(err));
        });

        tbody.addEventListener('click', async e => {
            let target = e.target.closest(".action-change");
            if(target){
                const inputs = modal.querySelectorAll(".input"),
                    id = target.closest('.table__row').querySelector('.table__id').textContent;
                dist = `http://localhost:3000/api/items/${id}`;

                const data = await makeRequest("GET", dist)
                    .then(resp => resp.json())
                    .catch(err => console.error(err));

                modal.style.display = 'flex';
                flagType = "PATCH";
                modalHead.textContent = "Изменение услуги";
                inputs.forEach(item => {
                    item.value = data[item.id];
                });
                return;
            }
            target = e.target.closest(".action-remove")
            if(target){
                const  id = target.closest('.table__row').querySelector('.table__id').textContent;
                dist = `http://localhost:3000/api/items/${id}`;
                await makeRequest("DELETE", dist)
                    .then(resp => {
                        console.log(1);
                    })
                    .catch(err => console.error(err));
                update();
            }
        });
    };

    const init = async () => {
        if(getCookie("userStatus") !== "Залогинен"){
            window.location.href = 'index.html';
            return;
        }
        
        update();
        
        addListeners();
    }
    init();

});