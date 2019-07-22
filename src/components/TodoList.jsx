import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({updatedTodos}) => (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Completed</th>
            <th>Title</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
        {
          updatedTodos.map(todo => (
            <TodoItem 
              todoItem={todo}
            />
          ))
        }
        </tbody>
      </table>
    </div>
)

export default TodoList