
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
            return fetch(distination, {method: "GET", mode: 'cors'});
        } else {
            document.body.classList.add('loaded');
            return fetch(distination, {
                method: 'POST',
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
        const tbody = document.getElementById('table');
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
            .then(resp => {
                return resp.json();
            })
            .catch(err => console.error(err));
    
        createTypesList(createTable(data), data);
        return data;
    };

    const addListeners = () => {
        const addBtn = document.querySelector('.btn-addItem'),
            modal = document.getElementById('modal'),
            form = modal.querySelector('form');
        addBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
        modal.addEventListener('click', e => {
            if(e.target.closest('.button__close') || e.target.closest('.cancel-button') || e.target.matches('.modal__overlay')){
                modal.querySelector('form').reset();
                modal.style.display = "none";
            }
        });
        form.addEventListener('submit', e => {
            e.preventDefault();
            console.log(form);
            const formData = new FormData(e.target);
            console.log(formData);
            const data = JSON.stringify(Object.fromEntries(formData));
            makeRequest("POST", "http://localhost:3000/api/items", data)
                .then(update)
                .then(() => {
                    modal.style.display = "none";
                    form.reset();
                })
                .catch(err => console.error(err));
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