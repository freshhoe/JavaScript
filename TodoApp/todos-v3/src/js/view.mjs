const render = () => {
  const _todos = control.todos.filter(todo =>
    control.currentFilter === 'completed'
      ? todo.completed
      : control.currentFilter === 'active'
      ? !todo.completed
      : true
  );

  $todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) =>
        `<li data-id="${id}">
          <div class="view">
          <input type="checkbox" class="toggle" ${completed ? 'checked' : ''} />
          <label>${content}</label>
          <button class="destroy"></button>
          </div>
          <input class="edit" value="${content}" />
      </li>
      `
    )
    .join('');

  [$main, $footer].forEach($el =>
    $el.classList.toggle('hidden', control.todos.length === 0)
  );

  const activeTodos = control.todos.filter(todo => !todo.completed);

  $todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? 'items' : 'item'
  } left`;

  const completedTodos = control.todos.filter(todo => todo.completed);
  $clearCompleted.classList.toggle('hidden', completedTodos.length === 0);
};

// DOM Nodes
const $main = document.querySelector('.main');
const $toggleAll = document.querySelector('.toggle-all');
const $newTodo = document.querySelector('.new-todo');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// Event handlers binding
$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const content = $newTodo.value.trim();

  if (content) addTodo(content);

  $newTodo.value = '';
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  const { id } = e.target.closest('li').dataset;

  toggleTodoCompleted(id);
};

$toggleAll.onchange = () => {
  toggleAllTodosCompleted($toggleAll.checked);
};

$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;

  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;

  updateTodoContent(e.target.parentNode.dataset.id, e.target.value);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  removeTodo(e.target.closest('li').dataset.id);
};

$filters.onclick = e => {
  if (!e.target.matches('.filters > li > a')) return;

  [...$filters.querySelectorAll('a')].forEach($a => {
    $a.classList.toggle('selected', $a === e.target);
  });

  setFilter(e.target.id);
};

$clearCompleted.onclick = removeAllCompltedTodos;

export { render };
