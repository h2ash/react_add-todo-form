import React from 'react'
import TodoList from './TodoList'

import users from '../api/users';

class MyForm extends React.Component {
  state = {
    updatedTodos: this.props.todos,
    title: '',
    completed: false,
    userName: '',

    errors: {
      userName: '',
    }
  }

  handleInput = (event) => {
    const {name, value, checked, type} = event.target;

    this.setState({
      [name]: (type === 'checkbox') ? checked : value,
    })
  }

  handleSumbit = (event) => {
    event.preventDefault();
    const {title, completed, userName} = this.state;

    const errors = {};
    this.setState(prevState => {
      if (!prevState.userName) {
        errors.userName = 'Please choose a user'
      }

      if (Object.keys(errors).length > 0) {
        return { errors };
      }
    })

    this.setState(prevState => ({
      updatedTodos: prevState.updatedTodos.concat({
        id: prevState.updatedTodos.length + 1,
        title: title,
        completed: completed,
        user: {
          name: userName,
        }
      }),
    }))


    this.setState({
      title: '',
      completed: false,
      userName: '',
    })
  }

  render() {
    const {updatedTodos, completed, title, userName} = this.state;
    return (
      <>
        <TodoList
          updatedTodos={updatedTodos}  
        />
        <span>Add new todo</span>
        
        <form onSubmit={this.handleSumbit}>
            <input 
              name='completed'
              type="checkbox"
              onChange={this.handleInput}
              checked={completed}
            />

          <label>Title:
            <input 
              name='title'
              value={title} 
              onChange={this.handleInput} 
              type="text"
              placeholder='Put the text'/>
          </label>

          <label>
            User:
            <select 
              name="userName" 
              value={userName}
              onChange={this.handleInput}
              >
                <option value="" selected disabled hidden>
                  Choose the user
                </option>
                {
                  users.map(user => (
                    <option value={user.name}>
                      {user.name}
                    </option>
                  ))
                }
            </select>
          </label>
          {this.state.errors.userName && (
            <div style={{color: 'red'}}>
              {this.state.errors.userName}
            </div>
          )}

          <button type='submit'>Add</button>
        </form>
      </>
    )
  }
}

export default MyForm
