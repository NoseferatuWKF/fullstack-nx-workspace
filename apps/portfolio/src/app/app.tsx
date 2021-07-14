import styles from './app.module.css';
import picture from '../assets/dp.jpg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github-logo.svg';
import angular from '../assets/angular.svg';
import react from '../assets/react.svg';
import nodejs from '../assets/nodejs.svg';
import unity from '../assets/unity.svg';
import aws from '../assets/aws.svg';
import django from '../assets/django.svg';
import docker from '../assets/docker.svg';
import dotnet from '../assets/dotnet.svg';
import graphql from '../assets/graphql.svg';
import mongodb from '../assets/mongodb.svg';
import mysql from '../assets/mysql.svg';
import postgresql from '../assets/postgresql.svg';
import nestjs from '../assets/nestjs.svg';
import spring from '../assets/spring.svg';

import ReactTooltip from "react-tooltip";

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
              <a
                className="panel-block notification button"
                href="https://www.linkedin.com/in/wan-kamal-farouq/"
              >
                <img
                  className="image is-24x24"
                  src={linkedin}
                  alt="linkedIn"
                ></img>
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
          <section className="tile is-child card">
            <article className="card-content">
              <p className="title">Skillset</p>
              <span className="section">
                <p className="subtitle">Programming Languages</p>
                <ul>
                  <li className="is-size-7 is-uppercase has-text-weight-semibold">
                    Javascript / Typescript
                    <progress
                      className="progress is-small is-link "
                      value="100"
                      max="100"
                    ></progress>
                  </li>
                  <li className="is-size-7 is-uppercase has-text-weight-semibold">
                    C#
                    <progress
                      className="progress is-small is-link"
                      value="75"
                      max="100"
                    ></progress>
                  </li>
                  <li className="is-size-7 is-uppercase has-text-weight-semibold">
                    Java
                    <progress
                      className="progress is-small is-link"
                      value="75"
                      max="100"
                    ></progress>
                  </li>
                  <li className="is-size-7 is-uppercase has-text-weight-semibold">
                    Python
                    <progress
                      className="progress is-small is-link"
                      value="60"
                      max="100"
                    ></progress>
                  </li>
                </ul>
              </span>
              <span className="section">
                <p className="subtitle">Tech Stack</p>
                <ul className={styles['tech-stack']}>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="angular"
                      src={angular}
                      alt="angular"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="react"
                      src={react}
                      alt="react"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="nodejs"
                      src={nodejs}
                      alt="nodejs"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="nestjs"
                      src={nestjs}
                      alt="nestjs"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="spring"
                      src={spring}
                      alt="spring"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="unity"
                      src={unity}
                      alt="unity"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="django"
                      src={django}
                      alt="django"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="dotnet"
                      src={dotnet}
                      alt="dotnet"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="docker"
                      src={docker}
                      alt="docker"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="graphql"
                      src={graphql}
                      alt="graphql"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="aws"
                      src={aws}
                      alt="aws"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="mongodb"
                      src={mongodb}
                      alt="mongodb"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="mysql"
                      src={mysql}
                      alt="mysql"
                    />
                  </li>
                  <li>
                    <img
                      className="image is-24x24"
                      data-tip
                      data-for="postgresql"
                      src={postgresql}
                      alt="postgresql"
                    />
                  </li>
                </ul>
              </span>
            </article>
          </section>
          <section className="tile is-child card">
            <article className="card-content">
              <p className="title">What I am Learning now</p>
              <span className="section">
                <ul className={styles['tech-stack']}>
                  <li>
                    <span className="tag is-link">FaunaDB</span>
                  </li>
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
                </ul>
              </span>
            </article>
          </section>
          <section className="tile is-child card">
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
        </aside>
        <main className="tile">
          <div className="tile is-parent">
            <section className="tile is-child card">
              <article className="card-content">
                <p className="title">Journey so far...</p>
                <article className="message is-link">
                  <div className="message-header">
                    <p>Wavelet Solutions Sdn Bhd</p>
                  </div>
                  <div className="message-body">...</div>
                </article>
                <article className="message is-link">
                  <div className="message-header">
                    <p>Prudential Assurance Malaysia Berhad</p>
                  </div>
                  <div className="message-body">...</div>
                </article>
                <article className="message is-link">
                  <div className="message-header">
                    <p>BMW Malaysia</p>
                  </div>
                  <div className="message-body">...</div>
                </article>
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
      <div>
        <ReactTooltip id="angular" place="top" effect="solid">
          Angular
        </ReactTooltip>
        <ReactTooltip id="react" place="top" effect="solid">
          React
        </ReactTooltip>
        <ReactTooltip id="nodejs" place="top" effect="solid">
          Node.js
        </ReactTooltip>
        <ReactTooltip id="nestjs" place="top" effect="solid">
          Nest.js
        </ReactTooltip>
        <ReactTooltip id="spring" place="top" effect="solid">
          Spring Boot
        </ReactTooltip>
        <ReactTooltip id="unity" place="top" effect="solid">
          Unity
        </ReactTooltip>
        <ReactTooltip id="django" place="top" effect="solid">
          Django
        </ReactTooltip>
        <ReactTooltip id="dotnet" place="top" effect="solid">
          .NET
        </ReactTooltip>
        <ReactTooltip id="docker" place="top" effect="solid">
          Docker
        </ReactTooltip>
        <ReactTooltip id="graphql" place="top" effect="solid">
          GraphQL
        </ReactTooltip>
        <ReactTooltip id="aws" place="top" effect="solid">
          Amazon Web Services
        </ReactTooltip>
        <ReactTooltip id="mongodb" place="top" effect="solid">
          MongoDB
        </ReactTooltip>
        <ReactTooltip id="mysql" place="top" effect="solid">
          MySQL
        </ReactTooltip>
        <ReactTooltip id="postgresql" place="top" effect="solid">
          PostgreSQL
        </ReactTooltip>
      </div>
    </div>
  );
}

export default App;
