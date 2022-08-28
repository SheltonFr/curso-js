// funcao de adicionar tarefa

function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value;

    if(taskTitle) { // verifica se existe ou nao
        //clonar template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true); // clona o elemento em outra variavel

        // adiciona titulo
        newTask.querySelector('span').textContent = taskTitle; // seleciona o span que existe no li

        // remover as classes desnecessarias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');
        
        // adicionar tarefa a lista
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        // adicionar evento de remover
        const removeBtn =  newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this);
        });

        // adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this);
        });

        // limpar texto
        document.querySelector('#task-title').value = '';
    }
}

// funcao de remover tarefa
function removeTask(task){
    // pega o elemento pai do bota remover(que sera a li), e remove esse mesmo elemento (remove a li) 
    task.parentNode.remove(true);
}

// funcao de completar tarefa
function completeTask(task) {
    const textComplete = task.parentNode;
    textComplete.classList.toggle('done');
    /**
     * toggle(str) - adiciona a str se nao exisitr, e remove a str caso exista
     */
}

// evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(event){

    event.preventDefault(); // cancela o envio de formulario (por ser um botao, por padrao  procura eviar o formulario)

    addTask();
});