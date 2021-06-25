import './todo-container.module.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface TodoContainerProps {}

export function TodoContainer(props: TodoContainerProps) {
  const [todos, setTodos] = useState<any[]>([])

  useEffect( () => {
      axios.get('http://localhost:3333/api/todos').then(
      a => setTodos(todos => [...a.data.todos])
    ).catch(e => console.error(e))
  })

  return (
    <div>
      {todos.map(t => <li key={t.guid}>{t.guid}: {t.task}</li>)}
    </div>
  );
}

export default TodoContainer;
