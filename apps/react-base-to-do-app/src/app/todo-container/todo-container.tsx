import './todo-container.module.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface TodoContainerProps {}

export function TodoContainer(props: TodoContainerProps) {
  const [todos, setTodos] = useState<any[]>([])

  useEffect( () => {
      axios.get('http://localhost:8080/api/todos').then(
      a => setTodos(todos => [...a.data])
    ).catch(e => console.error(e))
  })

  return (
    <div>
      {todos.map(t =>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <li key={t.id}>{t.id}: {t.task}</li>
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default TodoContainer;
