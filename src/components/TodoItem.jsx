import React from 'react'
import User from './User'

const TodoItem = ({todoItem}) => (
  <tr>
    <td>{todoItem.id}</td>
    <td><input type="checkbox" checked={todoItem.completed}/></td>
    <td>{todoItem.title}</td>
    <td><User user={todoItem.user}/></td>
  </tr>
)

export default TodoItem