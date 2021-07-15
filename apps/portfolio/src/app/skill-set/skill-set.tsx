import angular from '../../assets/angular.svg';
import react from '../../assets/react.svg';
import nodejs from '../../assets/nodejs.svg';
import unity from '../../assets/unity.svg';
import aws from '../../assets/aws.svg';
import django from '../../assets/django.svg';
import docker from '../../assets/docker.svg';
import dotnet from '../../assets/dotnet.svg';
import graphql from '../../assets/graphql.svg';
import mongodb from '../../assets/mongodb.svg';
import mysql from '../../assets/mysql.svg';
import postgresql from '../../assets/postgresql.svg';
import nestjs from '../../assets/nestjs.svg';
import spring from '../../assets/spring.svg';

import styles from './skill-set.module.css'

export function SkillSet() {
  return (
    <section className="tile is-parent">
      <section className="tile card">
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
    </section>
  );
}
