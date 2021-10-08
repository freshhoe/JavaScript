// << State : render 함수에 영향을 주는 데이터>>
// 여기 오는 데이터가 변하면 리렌더링해야 한다는 의미
// const store = {
// 이렇게 여러 상태 데이터를 객체 하나로 모을 수 있다.
// }
let todos = [];
// filter 상태
let currentFilter = 'all'; // 이 상태를 둘 수 있나? 가 관건

// DOM Nodes
const $main = document.querySelector('.main');
const $toggleAll = document.querySelector('.toggle-all');
const $newTodo = document.querySelector('.new-todo');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// state function

// todos main들을 모두 렌더하는 함수지만 나중에 재사용 목적으로 컴포넌트를 나누고
// render 함수로 나눌 수 있을 것.
// 이 render 함수는 li의 상위요소인 ul에 삽입하고 있어서 변경될 필요가 없는 Ul 요소도 DOM 체인지가 일어남.
// 이것은 문제가 있으니 수정 사항으로 볼 수 있음.
const render = () => {
  // filter를 위한 별도의 _todos 생성
  const _todos = todos.filter(todo =>
    currentFilter === 'completed'
      ? todo.completed
      : currentFilter === 'active'
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

  // 성능은 (약간) 손해. 가독성은 좋다.
  [$main, $footer].forEach($el =>
    $el.classList.toggle('hidden', todos.length === 0)
  );

  // 필터링 되지 않은 것을 카운팅해야 한다.
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

// << Model >>
// 서버의 상태 데이터를 가져와 state를 변경 (fetch라는 의미가 서버의 데이터를 `가져온다` 는 문맥과 상통한다.)
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

  // 나중에 진짜 서버를 사용한다면 여기에서 서버에 변경에 데이터를 보내는 과정이 추가되어야 한다.
};

const toggleAllTodosCompleted = completed => {
  setTodos(todos.map(todo => ({ ...todo, completed })));
};

const updateTodoContent = (id, content) => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
  // 인풋을 닫아주는 것은 엔터를 치면 위에서 새롭게 렌더링이 일어나고 editing 클래스도 사라지므로 필요없다.
};

const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

const removeAllCompltedTodos = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

// Event handlers binding
// << View >>
// 이벤트 타입중에 대소문자가 섞여있는 것은 on prefix를 못 붙이는 경우가 대부분
window.addEventListener('DOMContentLoaded', fetchTodos);

// 이벤트 핸들러 내부에서 this를 안 쓰겠다는 의미로 화살표 함수를 사용
$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const content = $newTodo.value.trim();

  // 아래 addTodo는 todos 변경에만 집중하고 있기 때문에 그 전에 trim 처리한다.
  // 이렇게 부가적인 처리는 이벤트 핸들러 내부에서 처리하고 함수에 진입한다.
  // 따로 함수를 쓸 필요가 없다면 이벤트 핸들러 내부에서 전부 처리한다.
  if (content) addTodo(content);

  $newTodo.value = '';
  // 버튼이 아닌 엔터로 삽입되고 있고, HTML에 autofocus가 되어 있어서 focus가 벗어나지 않는다.
  // 따라서 아래 함수는 필요없다.
  //   $newTodo.focus();
};

$todoList.onchange = e => {
  // 보이지 않는 수정모드 input
  if (!e.target.classList.contains('toggle')) return;

  // const {id} = e.target.parentNode.parentNode.dataset;
  // 이벤트가 발생한 요소의 가장 가까운 부모 요소인 li 를 찾는다.
  const { id } = e.target.closest('li').dataset;

  toggleTodoCompleted(id);
};

$toggleAll.onchange = () => {
  toggleAllTodosCompleted($toggleAll.checked);
};

$todoList.ondblclick = e => {
  // 이벤트 발생한 요소에 클래스가 없으므로 matches 사용
  // label이 아닌 destroy 버튼을 더블클릭해도 동작하면 안됨.
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

  // querySelector 계열의 요소취득 방식은 앞에 오는 메서드가 검색 범위라고 보면 된다.
  [...$filters.querySelectorAll('a')].forEach($a => {
    $a.classList.toggle('selected', $a === e.target);
  });

  setFilter(e.target.id);
};

$clearCompleted.onclick = removeAllCompltedTodos;
