let input = document.querySelector('input[name=task]');

let button = document.querySelector('#button');

let list = document.querySelector('#taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function taskRender() {

    // limpa a listagem antes de renderizar
    list.innerHTML = '';

    for (task of tasks) {

        let listItem = document.createElement("li"); // Criando um item da lista

        listItem.setAttribute('class', 'list-group-item list-group-item-action'); // setando a classe bootstrap pro li
        

        

        let itemText = document.createTextNode(task);

        listItem.appendChild(itemText); // adicionar texto no item lista

        let deleteButton = document.createElement("button"); // Criando o botão "Delete"
        deleteButton.setAttribute('class', 'btn btn-danger btn-sm'); // Setando a classe bootstrap para o botão
        deleteButton.appendChild(document.createTextNode("Delete")); // Adicionando o texto "Delete" ao botão

        deleteButton.onclick = function() {
            deleteTask(this.parentNode);
        };


        deleteButton.style.float = "right";
        deleteButton.style.marginRight = "5px";

        listItem.appendChild(deleteButton); // Adicionando o botão ao item da lista

        list.appendChild(listItem);
    }
}

taskRender();

button.onclick = function() {
    let newTask = input.value;

    if (newTask !== '') {

    

    tasks.push(newTask);

    taskRender();

    input.value = ''; // input clearer
    }
     else {
        alert("Please don't enter a blank task name!");
        input.value = '';
     }
    
     saveOnStorage();

}

function deleteTask(task) {

    tasks.splice(tasks.indexOf(task.textContent), 1);

    taskRender();
    
    saveOnStorage();
}

function saveOnStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

