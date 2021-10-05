// 1.3 모듈화
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const add = newTodo => {
  todos = [newTodo, ...todos];
};

const render = () =>
  todos
    .map(
      ({ id, content, completed }) => `
            <li id="${id}">
            <label><input type="checkbox" ${
              completed ? 'checked' : ''
            }>${content}</label>
            </li>`
    )
    .join('');

const Todos = { add, render };

export default Todos;
