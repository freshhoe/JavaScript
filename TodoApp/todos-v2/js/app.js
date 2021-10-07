// State
let todos = [];

// DOM Nodes
const $mainSection = document.querySelector('.main');
const $newTodo = document.querySelector('.new-todo');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $filters = document.querySelector('.filters').querySelectorAll('*');
console.log([...$filters].filter((_, i) => i % 2 !== 0));

const render = () => {
  $todoList.innerHTML = todos
    .map(
      ({ id, content, editing, completed }) => `
    <li data-id="${id}" ${editing ? 'class="editing"' : ''}>
        <div class="view">
        <input type="checkbox" ${completed ? 'checked' : ''} class="toggle" />
        <label>${content}</label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="${content}" />
    </li>
    `
    )
    .join('');
};

const setTodos = newTodos => {
  todos = newTodos;
  console.log('[TODOS]: ', todos);
  render();

  $footer.style.display = todos.length === 0 ? 'none' : '';

  $footer.firstElementChild.textContent =
    todos.length > 1
      ? `${todos.length} item lefts`
      : `${todos.length} item left`;

  $footer.lastElementChild.textContent =
    todos.filter(todo => todo.completed).length === 0 ? '' : 'Clear completed';
};

const fetchTodos = () => {
  setTodos([
    { id: 3, content: 'JavaScript', editing: false, completed: false },
    { id: 2, content: 'CSS', editing: false, completed: true },
    { id: 1, content: 'HTML', editing: false, completed: false }
  ]);
};

const generateTodoId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

const addTodo = content => {
  setTodos([
    { id: generateTodoId(), content, editing: false, completed: false },
    ...todos
  ]);
};

const toggleTodoCompleted = id => {
  setTodos(
    todos.map(todo =>
      todo.id === +id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const toggleTodoCompletedAll = () => {
  setTodos(
    todos.map(todo =>
      !todo.completed
        ? { ...todo, completed: true }
        : todo.completed
        ? todo
        : { ...todo, completed: false }
    )
  );
};

const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

const toggleTodoEditing = todoItem => {
  todoItem.classList.toggle('editing');
};

const removeCompletedTodo = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

function select({ target }) {
  if (!target.matches('.filters > li')) return;

  console.log([...$filters].filter((_, i) => i % 2 !== 0));

  [...$filters]
    .filter((_, i) => i % 2 !== 0)
    .forEach($filter => {
      $filter.classList.toggle('selected', $filter === target);
    });
}

// Event Handler Binding
window.addEventListener('DOMContentLoaded', fetchTodos);

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;
  e.preventDefault();

  const content = $newTodo.value.trim();

  if (content) addTodo(content);

  $newTodo.value = '';
  $newTodo.focus();
};

$todoList.onchange = e => {
  toggleTodoCompleted(e.target.parentNode.parentNode.dataset.id);
};

$toggleAll.onclick = e => {
  toggleTodoCompletedAll();
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;
  const todoItem = e.target.parentNode.parentNode;
  removeTodo(todoItem.dataset.id);
};

$todoList.ondblclick = e => {
  if (e.target.className === 'edit') toggleTodoEditing(e.target.parentNode);
  if (e.target.nodeName !== 'LABEL') return;

  const todoItem = e.target.parentNode.parentNode;
  toggleTodoEditing(todoItem);
};

$footer.lastElementChild.onclick = e => {
  removeCompletedTodo();
};

$filters.onclick = select;
