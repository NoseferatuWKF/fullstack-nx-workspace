import styles from './app.module.css';

import { Route, Link } from 'react-router-dom';
import Header from './header/header';
import TodoContainer from './todo-container/todo-container';

export function App() {

  return (
    <div className={styles.app}>
      <main>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <Header></Header>
                <h2>TODOs</h2>
                <TodoContainer></TodoContainer>
              <div role="navigation">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/page-2">Page 2</Link>
                  </li>
                </ul>
              </div>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
