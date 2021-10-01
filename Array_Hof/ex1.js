// 1. html 생성
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const render = todos => {
  return todos
    .map(todo => {
      return `<li id="${todo.id}"><label><input type="checkbox">${todo.content}</label>
   </li>`;
    })
    .join('');
};
console.log(render(todos));
