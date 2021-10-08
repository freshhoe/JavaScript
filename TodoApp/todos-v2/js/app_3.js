// State
let todos = [];
let currentFilter = 'all';

// DOM Nodes
const $newTodo = document.querySelector('.new-todo');
const $main = document.querySelector('.main');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// State function
const render = () => {
  const _todos = todos.filter(todo =>
    currentFilter === 'completed'
      ? todo.completed
      : currentFilter === 'active'
      ? !todo.completed
      : todo
  );

  $todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) => `
    <li data-id="${id}">
        <div class="view">
            <input type="checkbox" class="toggle" ${
              completed ? 'checked' : ''
            } />
            <label>${content}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="${content}" />
    </li>`
    )
    .join('');

  [$main, $footer].forEach($el =>
    $el.classList.toggle('hidden', todos.length === 0)
  );

  const activeTodos = todos.filter(todo => !todo.completed);

  $todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? 'items' : 'item'
  } left`;

  const completedTodos = todos.filter(todo => todo.completed);
  $clearCompleted.classList.toggle('hidden', completedTodos.length === 0);
};

const setTodos = newTodos => {
  todos = newTodos;
  console.log('[TODOS]: ', todos);
  render();
};

const setFilter = newFilter => {
  currentFilter = newFilter;
  console.log('[FILTER]: ', currentFilter);
  render();
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
  setTodos([{ id: generateTodoId(), content, completed: false }, ...todos]);
};

const toggleTodoCompleted = id => {
  setTodos(
    todos.map(todo =>
      todo.id === +id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const toggleAllTodosCompleted = completed => {
  setTodos(todos.map(todo => ({ ...todo, completed })));
};

const updateTodoContent = (id, content) => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
};

const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

const removeAllCompltedTodos = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

// Event handlers binding
window.addEventListener('DOMContentLoaded', fetchTodos);

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const content = $newTodo.value.trim();

  if (content) addTodo(content);

  $newTodo.value = '';
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  toggleTodoCompleted(e.target.closest('li').dataset.id);
};

$toggleAll.onclick = e => {
  if (!e.target.classList.contains('toggle-all')) return;

  toggleAllTodosCompleted($toggleAll.checked);
};

$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;

  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;

  updateTodoContent(e.target.closest('li').dataset.id, e.target.value);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  removeTodo(e.target.closest('li').dataset.id);
};

$filters.onclick = e => {
  if (!e.target.matches('.filters > li > a')) return;

  [...$filters.querySelectorAll('a')].forEach($a =>
    $a.classList.toggle('selected', $a === e.target)
  );

  setFilter(e.target.id);
};

$clearCompleted.onclick = removeAllCompltedTodos;
