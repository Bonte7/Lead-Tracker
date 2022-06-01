let myLeads = [];
const saveInput = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

saveInput.addEventListener('click', handleSaveInput);

function handleSaveInput() {

    if(myLeads.find(element => element === inputEl.value)) {
        alert('This lead already exists!')
    } else if(inputEl.value.length === 0) {
        alert('Text field cannot be empty!')
    } else {
        myLeads.push(inputEl.value);
        renderLeads();
        inputEl.value = '';
    }
    
}


function renderLeads() {

    let listItems = '';

    for(let i = 0; i < myLeads.length; i++) {
       
        listItems += 
        `<li>
            <a href='https://${myLeads[i]}' target='_blank' rel='noopener noreferrer'>
                ${myLeads[i]}
            </a>
        </li>`;
    }

    ulEl.innerHTML = listItems;

}



