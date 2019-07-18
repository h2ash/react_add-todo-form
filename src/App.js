import React from 'react';
import './App.css';
import MyForm from './components/MyForm';

import todos from './api/todos';
import users from './api/users';

const todosWithUsers = todos.map((todo, index) => {
  return {
    id: index + 1,
    ...todo,
    user: users.find(user => todo.userId === user.id),
  }
});

class App extends React.Component {
  state = {
    todos: todosWithUsers,
  }

  render() {
    return (
      <div>
        <h1>Add todo form</h1>
        <MyForm 
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
