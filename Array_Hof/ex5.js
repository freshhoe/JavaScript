// 특정 요소 삭제
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// before
// const removeTodo = (todos, id) => {
//   return todos.filter(todo => todo.id !== id);
// };

//after
const removeTodo = (todos, id) => todos.filter(todo => todo.id !== id);

todos = removeTodo(todos, 2);
console.log(todos);
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
*/
