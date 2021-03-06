// 3. 프로퍼티 정렬

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// before
// const sortBy = (todos, key) => {
//   return todos.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
// };

// after
const sortBy = (todos, key) =>
  [...todos].sort((todo1, todo2) =>
    todo1[key] > todo2[key] ? 1 : todo1[key] < todo2[key] ? -1 : 0
  );

/* 
  재할당의 이점
    1. 순수함수로서 사용해서 부수효과 억제
    2. `===` 일치 비교 연산자를 통해 간단히 변경 여부 확인 가능
*/
todos = sortBy(todos, 'id');
console.log(todos);
/*
  [
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ]
*/
console.log(sortBy(todos, 'content'));
/*
  [
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
*/
console.log(sortBy(todos, 'completed'));
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true }
  ]
*/
