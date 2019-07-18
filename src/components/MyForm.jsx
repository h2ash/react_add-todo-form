import React from 'react'
import TodoList from './TodoList'

class MyForm extends React.Component {
  state = {
    updatedTodos: this.props.todos,
    title: '',
    completed: false,
  }

  handleInput = (event) => {
    const {name, value, checked, type} = event.target;
    this.setState({
      [name]: (type === 'checkbox') ? checked : value,
    })
  }

  handleSumbit = (event) => {
    event.preventDefault();
    const {title, completed} = this.state;
    this.setState(prevState => ({
      updatedTodos: prevState.updatedTodos.concat({
        id: prevState.updatedTodos.length + 1,
        title: title,
        completed: completed,
        user: {
          name: 'Dima',
        }
      })
    }))
  }


  render() {
    return (
      <>
        <h5>Add new todo</h5>

        <form onSubmit={this.handleSumbit}>
          <label htmlFor="">Title:
            <input 
              name='title'
              value={this.state.title} 
              onChange={this.handleInput} 
              type="text"/>
          </label>

          <input 
            name='completed'
            type="checkbox"
            onChange={this.handleInput}/>

          <button type='submit'>Add</button>
        </form>
        <TodoList
          updatedTodos={this.state.updatedTodos}  
        />
      </>
    )
  }
}

export default MyForm