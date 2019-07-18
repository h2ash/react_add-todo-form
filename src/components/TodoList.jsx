import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({updatedTodos}) => (
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
)

export default TodoList