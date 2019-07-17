import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => (
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
        todos.map(todo => (
          <TodoItem 
            todoItem={todo}
          />
        ))
      }
      </tbody>
    </table>
)

export default TodoList