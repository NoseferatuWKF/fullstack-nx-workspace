import styles from './app.module.css';

import { Route, Link } from 'react-router-dom';
import Header from './header/header';
import TodoContainer from './todo-container/todo-container';

export function App() {

  return (
    <div>
      <Header></Header>
      <main className={styles.app}>
        <TodoContainer></TodoContainer>
        <Route
          path="/"
          exact
          render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
          )}
        />
        <Route
          path="/page-2"
          exact
          render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
          )}
        />
      </main>
    </div>
  );
}

export default App;
