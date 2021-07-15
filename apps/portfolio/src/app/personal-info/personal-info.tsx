import picture from '../../assets/dp.jpg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github-logo.svg';

import styles from './personal-info.module.css'

export function PersonalInfo() {
  return (
    <section className="tile is-parent is-vertical">
      <section className="tile card-image">
        <figure className="tile">
          <img
            className={styles['resume-picture']}
            src={picture}
            alt="DP"
          ></img>
        </figure>
        <article className="tile is-child">
          <a
            className="panel-block notification button"
            href="https://www.linkedin.com/in/wan-kamal-farouq/"
          >
            <img className="image is-24x24" src={linkedin} alt="linkedIn"></img>
            <a className={styles.links}>LinkedIn</a>
          </a>
          <a
            className="panel-block notification button"
            href="https://github.com/NoseferatuWKF"
          >
            <img className="image is-24x24" src={github} alt="github"></img>
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
    </section>
  );
}
