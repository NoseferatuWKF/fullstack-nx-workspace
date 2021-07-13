import styles from './app.module.css';
import picture from '../assets/dp.jpg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github-logo.svg';

export function App() {
  return (
    <div className="container is-fluid section">
      <div className="tile is-ancestor">
        <aside className="tile is-parent is-vertical is-3">
          <section className="tile card-image">
            <figure className="tile">
              <img
                className={styles['resume-picture']}
                src={picture}
                alt="DP"
              ></img>
            </figure>
            <article className="tile is-child">
              <a className="panel-block notification is-active" href="https://www.linkedin.com/in/wan-kamal-farouq/">
                <img className="image is-24x24" src={linkedin} alt="DP"></img>
                <a className={styles.links}>LinkedIn</a>
              </a>
              <a className="panel-block notification is-active" href="https://github.com/NoseferatuWKF">
                <img className="image is-24x24" src={github} alt="DP"></img>
                <a className={styles.links}>Github</a>
              </a>
            </article>
          </section>
          <section className="tile is-child card">
            <article className="card-content">
              <p className="title">Wan Kamal</p>
              <p className="subtitle">Generalist | Software Developer</p>
            </article>
          </section>
          <section className="tile is-child card">
            <article className="card-content">
              <p className="title">Skillset</p>
            </article>
          </section>
        </aside>
        <main className="tile">
          <div className="tile is-parent">
            <section className="tile is-child card">
              <article className="card-content">
                <p className="title">Journey so far...</p>
                <p className="subtitle">Wavelet Solutions Sdn Bhd</p>
                <span className="content">
                  ...
                </span>
                <p className="subtitle">Prudential Assurance Malaysia Berhad</p>
                <span className="content">
                  ...
                </span>
                <p className="subtitle">BMW Malaysia</p>
                <span className="content">
                  ...
                </span>
              </article>
            </section>
          </div>
        </main>
      </div>
      {/* <div className="card">
        <footer className="card-footer">
          <p className="card-footer-item">
            <strong>React</strong>
          </p>
          <p className="card-footer-item">
            <strong>Bulma</strong>
          </p>
        </footer>
      </div> */}
    </div>
  );
}

export default App;
