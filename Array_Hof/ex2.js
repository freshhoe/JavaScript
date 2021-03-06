// 2. 특정 프로퍼티 값 추출
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// before
const getValues = (todos, key) => {
  return todos.map(todo => {
    return todo[key];
  });
};

// after
const getValues = (todos, key) => todos.map(todo => todo[key]);

console.log(getValues(todos, 'id')); // [3, 2, 1]
console.log(getValues(todos, 'content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues(todos, 'completed')); // [false, true, false]
