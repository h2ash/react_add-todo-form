import React from 'react'
import TodoList from './TodoList'

import users from '../api/users';

class MyForm extends React.Component {
  state = {
    updatedTodos: this.props.todos,
    title: '',
    completed: false,
    userName: '',
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
    this.setState(prevState => ({
      updatedTodos: prevState.updatedTodos.concat({
        id: prevState.updatedTodos.length + 1,
        title: title,
        completed: completed,
        user: {
          name: userName,
        }
      }),
      title: '',
      completed: false,
      userName: '',
    }))
  }

  render() {
    return (
      <>
        <TodoList
          updatedTodos={this.state.updatedTodos}  
        />
        <span>Add new todo</span>
        
        <form onSubmit={this.handleSumbit}>
            <input 
              name='completed'
              type="checkbox"
              onChange={this.handleInput}
              checked={this.state.completed}
            />

          <label>Title:
            <input 
              name='title'
              value={this.state.title} 
              onChange={this.handleInput} 
              type="text"
              placeholder='Put the text'/>
          </label>

          <label>
            User:
            <select 
              name="userName" 
              value={this.state.userName}
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

          <button type='submit'>Add</button>
        </form>
      </>
    )
  }
}

export default MyForm
