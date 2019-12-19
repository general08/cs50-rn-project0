const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let id = 0;
function newTodo() {
  const text = prompt('Enter the Todo name?');
  if (text) {
    id = id + 1;
    const MyTodoId = `todo-${id}`;
    const textId = `text-${id}`;
    const checkboxId = `checkbox-${id}`;
    const deleteId = `delete-${id}`;
    const dataId = `data-${id}`;

    let todoItem = document.createElement('li');
    todoItem.setAttribute('class', classNames.TODO_ITEM);
    todoItem.setAttribute('id', MyTodoId);
  
    let container = document.createElement('div');
    container.setAttribute('class', 'data-container');
    container.setAttribute('id', dataId);
   
    let operators = document.createElement('div');
    operators.setAttribute('class', 'operators');
   
    let todoLabel = document.createElement('label');
    todoLabel.setAttribute('id', textId);
    todoLabel.setAttribute('class', classNames.TODO_TEXT);
    todoLabel.textContent = text;

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', checkboxId);
    checkbox.setAttribute('class', classNames.TODO_CHECKBOX);
    checkbox.setAttribute('onclick', `handleCheck('${textId}', '${checkboxId}')`);

    todoLabel.appendChild(checkbox);

    const deleteTodo = document.createElement('span');
    deleteTodo.setAttribute('class', classNames.TODO_DELETE);
    deleteTodo.setAttribute('id', deleteId)
    deleteTodo.innerHTML = 'Delete';
    deleteTodo.setAttribute('onclick', `deleteTodo('${MyTodoId}')`);

    operators.append(deleteTodo)
    container.append(todoLabel, operators)
    todoItem.append(container);
  
    list.insertBefore(todoItem, document.querySelector("ul > li"));
    newCount()
  }
}

function newCount() {
  itemCountSpan.innerHTML = list.getElementsByTagName('li').length.toString();
  uncheckedCountSpan.innerHTML = getUncheckedCount()
}

function deleteTodo(MyTodoId) {
  const todo = document.getElementById(MyTodoId)
  list.removeChild(todo)
  newCount()

}

function handleCheck(textId, checkboxId) {

  newCount()
}

function getUncheckedCount() {
  return Array.from(document.querySelectorAll(`.${classNames.TODO_CHECKBOX}`)).filter(({ checked }) => !checked).length
}

