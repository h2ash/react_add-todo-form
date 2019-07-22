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
      title: '',
      userName: '',
    }
  }

  handleInput = (event) => {
    const {name, value, checked, type} = event.target;
    const {errors} = this.state;

    this.setState({
      [name]: (type === 'checkbox') ? checked : value,
    })

    this.setState(prevState => {
      if (prevState.title) {
        errors.title = ''
      }

      if (prevState.userName) {
        errors.userName = ''
      }
    })
  }

  handleSumbit = (event) => {
    event.preventDefault();
    const {title, completed, userName} = this.state;

    const errors = {};
    this.setState(prevState => {
      if (!prevState.title) {
        errors.title = 'Please enter the title'
      }

      if (!prevState.userName) {
        errors.userName = 'Please choose a user'
      }

      if (Object.keys(errors).length > 0) {
        return { errors };
      }
    })

    if (this.state.title && this.state.userName) {
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
  }

  render() {
    const {updatedTodos, completed, title, userName} = this.state;
    return (
      <>
      
      <div className='add-form'>
          <h2 className='add-form__title'>Add new task</h2>
          
          <form onSubmit={this.handleSumbit}>

            <label className='add-form__enter'>
              <input 
                name='title'
                value={title} 
                onChange={this.handleInput} 
                type="text"
                placeholder='Enter new task'/>
              {this.state.errors.title && (
                <div className='errors'>
                  {this.state.errors.title}
                </div>
              )}
            </label>


            <label className='add-form__enter'>
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
              {this.state.errors.userName && (
              <div className='errors'>
                {this.state.errors.userName}
              </div>
              )}
            </label>

  
            <button className='add-form__button' type='submit'>Add</button>
          </form>
        </div>
        <TodoList
          updatedTodos={updatedTodos}  
        />
      </>
    )
  }
}

export default MyForm
