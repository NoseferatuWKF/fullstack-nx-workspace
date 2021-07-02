import  './todo-container.module.css';
import { Todo } from '@nx-workspace/shared/rest-api-interfaces'
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface TodoContainerProps {
  todo: Todo
}

export function TodoContainer(props: TodoContainerProps) {

  const [updatedDate, setUpdatedDate] = useState(props.todo.updatedDate);

  const updateTask = async (todo: Todo) => {
    await axios.put('http://localhost:8080/api/todos', todo).then(
    (a => setUpdatedDate(a.data.updatedDate))
  )}
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h6>{props.todo.task}</h6>
            <p>Last Updated Date: <strong>{new Date(updatedDate).toString()}</strong></p>
            <progress className="progress is-primary" value={props.todo.progress} max="100">{props.todo.progress}</progress>
            <div className="navbar-end buttons">
              <button onClick={(e) => updateTask(props.todo)} className="button is-primary">
                <strong>Update</strong>
              </button>
              <button className="button is-danger">
                <strong>Delete</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;
