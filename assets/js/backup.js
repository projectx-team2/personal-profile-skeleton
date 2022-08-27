var id = 0;
function getData(tagId) {
    var information = document.getElementById(tagId);
    return information.innerText;
}

function viewData(id) {
    alert(getData(id));
}

function addName() {
    var name = prompt("please enter a name?");
    if (name !== '' && name != null) {
        id++;
        addDataToTable(name, id);
    }
}
function addDataToTable(name, recordId) {
    var table = document.getElementById('nameData');
    var tableRow = document.createElement('tr');
    var recordData = document.createElement('td');
    recordData.id = id;
    recordData.innerHTML = name;
    tableRow.appendChild(recordData);
    var recordAction = document.createElement('td');
    var button = document.createElement('button');
    button.innerText = 'View Data';
    button.addEventListener('click', function handleClick(event) {
        viewData(recordId);
    });
    recordAction.appendChild(button);
    tableRow.appendChild(recordAction);
    table.appendChild(tableRow);
}