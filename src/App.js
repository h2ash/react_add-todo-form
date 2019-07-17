import React from 'react';
import './App.css';
import TodoList from './components/TodoList'

import todos from './api/todos';
import users from './api/users';

const todosWithUsers = todos.map((todo, index) => {
  return {
    id: index + 1,
    ...todo,
    user: users.find(user => todo.userId === user.id), 
  }
})

const App = () => {
  return (
    <div>
      <h1>Add todo form</h1>
      <TodoList
        todos={todosWithUsers}  
      />
    </div>
  );
}

export default App;
