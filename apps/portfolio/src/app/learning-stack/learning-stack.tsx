import styles from './learning-stack.module.css'

export function LearningStack () {
  return (
    <section className="tile is-parent">
      <section className="tile card">
        <article className="card-content">
          <p className="title">Learning Stack</p>
          <span className="section">
            <ul className={styles['tech-stack']}>
              <li>
                <span className="tag is-link">Web Assembly</span>
              </li>
              <li>
                <span className="tag is-link">Three.js</span>
              </li>
              <li>
                <span className="tag is-link">Blender</span>
              </li>
              <li>
                <span className="tag is-link">FL Studio</span>
              </li>
              <li>
                <span className="tag is-link">Flask</span>
              </li>
              <li>
                <span className="tag is-link">GraphQL Federation</span>
              </li>
              <li>
                <span className="tag is-link">Web Transport</span>
              </li>
              <li>
                <span className="tag is-link">Flutter</span>
              </li>
              <li>
                <span className="tag is-link">Kubernetes</span>
              </li>
            </ul>
          </span>
        </article>
      </section>
    </section>
  );
}
