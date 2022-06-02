let myLeads = [];
const saveInput = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteInput = document.getElementById('delete-btn');
const saveTabInput = document.getElementById('tab-btn');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(renderItems) {

    let listItems = '';

    for(let i = 0; i < renderItems.length; i++) {
        listItems += 
        `<li>
            <a href='https://${renderItems[i]}' target='_blank' rel='noopener noreferrer'>
                ${renderItems[i]}
            </a>
        </li>`;
    }

    ulEl.innerHTML = listItems;

}

//manually save lead
saveInput.addEventListener('click', function() {

    if(checkForDuplicate(myLeads, inputEl.value) === false) {
        myLeads.push(inputEl.value);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
        inputEl.value = '';
    }
    
});

//save browser tab as lead
saveTabInput.addEventListener('click', function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        if(checkForDuplicate(myLeads, tabs[0].url) === false) {
            myLeads.push(tabs[0].url);
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            render(myLeads);
        }
   
     });

    
    
});

//delete saved leads
deleteInput.addEventListener('dblclick', function() {
    myLeads = [];
    localStorage.removeItem("myLeads");
    render(myLeads)
});

//function to check for duplicate or empty lead values
function checkForDuplicate(arrToCheck, valueToFind) {

    if(arrToCheck.find(element => element === valueToFind)) {
        alert('This lead already exists!')
    } else if(valueToFind.length === 0) {
        alert('Text field cannot be empty!')
    } else {
        return false;
    }
}







