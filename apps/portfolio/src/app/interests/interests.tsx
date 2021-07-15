import styles from './interests.module.css'

export function Interests() {
  return (
    <section className="tile is-parent">
      <section className="tile card">
        <article className="card-content">
          <p className="title">Interests</p>
          <span className="section">
            <ul className={styles['tech-stack']}>
              <li>
                <span className="tag is-link">Technology</span>
              </li>
              <li>
                <span className="tag is-link">Automotive</span>
              </li>
              <li>
                <span className="tag is-link">Food</span>
              </li>
              <li>
                <span className="tag is-link">Arts & Music</span>
              </li>
              <li>
                <span className="tag is-link">Sports</span>
              </li>
              <li>
                <span className="tag is-link">Polyphia</span>
              </li>
              <li>
                <span className="tag is-link">MotoGP</span>
              </li>
            </ul>
          </span>
        </article>
      </section>
    </section>
  );
}
