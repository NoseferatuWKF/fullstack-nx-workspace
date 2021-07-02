import styles from './app.module.css';

import { Route, Link } from 'react-router-dom';
import Header from './header/header';
import TodoContainer from './todo-container/todo-container';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '@nx-workspace/shared/rest-api-interfaces';

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect( () => {
      axios.get('http://localhost:8080/api/todos').then(
      a => setTodos(todos => [...a.data])
    ).catch(e => console.error(e))
  }, [])
  return (
    <div>
      <Header></Header>
      <div className={styles.app}>
        <main style={{
          position: 'relative',
          top: '90px',
          display: 'grid',
          width: '80%',
          gap: '5%'
        }}>
          {todos.map(t =>
          <TodoContainer todo={t}></TodoContainer>
          )}
          <Route
            path='/'
            exact
            render={() => (
              <div>
                This is the generated root route.{' '}
                <Link to='/page-2'>Click here for page 2.</Link>
              </div>
            )}
          />
          <Route
            path='/page-2'
            exact
            render={() => (
              <div>
                <Link to='/'>Click here to go back to root page.</Link>
              </div>
            )}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
