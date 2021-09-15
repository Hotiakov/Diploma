import makeRequest from './makeRequest';

const repairTabs = async () => {
    let data;
    const listOfTables = {};
    const navList = document.querySelector('.nav-list-popup-repair'),
        tableWrapper = document.querySelector('.popup-repair-types-content-table'),
        title = document.getElementById('switch-inner');
    const setNavList = () => {
        data.forEach(item => {
            const type = item.type.trim().toLowerCase();
            if(!listOfTables[type]){
                const newTable = document.createElement('table');
                const tbody = document.createElement('tbody');
                newTable.className = "popup-repair-types-content-table__list";
                newTable.appendChild(tbody);
                listOfTables[type] = {"type": newTable, "tbody": tbody};
                tableWrapper.appendChild(newTable);
                navList.insertAdjacentHTML('beforeend', `
                    <button class="button_o popup-repair-types-nav__item">${item.type}</button>
                `);
            }
            listOfTables[type]["tbody"].insertAdjacentHTML('beforeend', `
                <tr class="mobile-row showHide">
                    <td class="repair-types-name">${item.name}</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                    <td class="repair-types-value">${item.units === "м2" ? "м<sup>2</sup>" : item.units}</td>
                    <td class="repair-types-value">${item.cost}</td>
                </tr>
            `);
        });
    }

    const activateTabs = () => {
        navList.addEventListener('click', e => {
            if(e.target.tagName === "BUTTON"){
                let type = e.target.textContent;
                const curActive =  tableWrapper.querySelector('.active');
                if(curActive)
                    curActive.classList.remove('active');
                title.textContent = type;
                type = type.trim().toLowerCase();
                listOfTables[type]["type"].classList.add('active');
            }
        });
        navList.querySelector('button').dispatchEvent(new Event('click', {"bubbles":true}));
    };

    await makeRequest("GET", './crm-backend/db.json')
        .then( resp =>  resp.json())
        .then( resp => data = resp)
        .then( setNavList)
        .then( activateTabs )
        .catch( err => console.error(err));
    
};

export default repairTabs;