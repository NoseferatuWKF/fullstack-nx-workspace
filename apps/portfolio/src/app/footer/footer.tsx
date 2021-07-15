import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className="footer">
      <p>Like This Page?</p>
      <ul className={styles['stacks']}>
        <li>
          <strong>Then check these out <span role="img" aria-label="point-right">👉</span></strong>
        </li>
        <li>
          <a className="tag is-primary" href="https://nx.dev/">Nx Workspace</a>
        </li>
        <li>
          <a className="tag is-primary" href="https://reactjs.org/">React</a>
        </li>
        <li>
          <a className="tag is-primary" href="https://bulma.io/">Bulma</a>
        </li>
      </ul>
    </footer>
  );
}
