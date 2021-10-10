import { todos, currentFilter, fetchTodos } from './model.js';
import { render } from './view.js';

export const setTodos = newTodos => {
  todos = newTodos;
  console.log('[TODOS]: ', todos);
  render();
};

export const setFilter = newFilter => {
  currentFilter = newFilter;
  console.log('[FILTER]: ', currentFilter);
  render();
};

export const generateTodoId = () =>
  Math.max(...todos.map(todo => todo.id), 0) + 1;

export const addTodo = content => {
  setTodos([{ id: generateTodoId(), content, completed: false }, ...todos]);
};

export const toggleTodoCompleted = id => {
  setTodos(
    todos.map(todo =>
      todo.id === +id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

export const toggleAllTodosCompleted = completed => {
  setTodos(todos.map(todo => ({ ...todo, completed })));
};

export const updateTodoContent = (id, content) => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
};

export const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

export const removeAllCompltedTodos = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

window.addEventListener('DOMContentLoaded', fetchTodos);
