import { setTodos, todos, currentFilter } from './controller.js';

let todos = [];
let currentFilter = 'all';

const fetchTodos = () => {
  setTodos([
    { id: 3, content: 'JavaScript', editing: false, completed: false },
    { id: 2, content: 'CSS', editing: false, completed: true },
    { id: 1, content: 'HTML', editing: false, completed: false }
  ]);
};

export { todos, currentFilter, fetchTodos };
