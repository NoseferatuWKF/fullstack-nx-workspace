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
import fauna from '../../assets/fauna.svg';
import terraform from '../../assets/terraform.svg';

import styles from './skill-set.module.css';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

export function SkillSet() {
  const [skills] = useState([
    ['Angular', angular],
    ['React', react],
    ['Node.js', nodejs],
    ['Unity', unity],
    ['AWS', aws],
    ['Django', django],
    ['Docker', docker],
    ['Dotnet', dotnet],
    ['GraphQL', graphql],
    ['MongoDB', mongodb],
    ['MySQL', mysql],
    ['PostgreSQL', postgresql],
    ['Nest.js', nestjs],
    ['Spring', spring],
    ['FaunaDB', fauna],
    ['Terraform', terraform],
  ]);

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
            <p className="subtitle">Industry Knowledge</p>
            <ul>
              <li className="is-size-7 is-uppercase has-text-weight-semibold">
                ERP
                <progress
                  className="progress is-small is-link "
                  value="75"
                  max="100"
                ></progress>
              </li>
              <li className="is-size-7 is-uppercase has-text-weight-semibold">
                CMS
                <progress
                  className="progress is-small is-link"
                  value="60"
                  max="100"
                ></progress>
              </li>
              <li className="is-size-7 is-uppercase has-text-weight-semibold">
                CRM
                <progress
                  className="progress is-small is-link"
                  value="50"
                  max="100"
                ></progress>
              </li>
              <li className="is-size-7 is-uppercase has-text-weight-semibold">
                E-Commerce
                <progress
                  className="progress is-small is-link"
                  value="60"
                  max="100"
                ></progress>
              </li>
              <li className="is-size-7 is-uppercase has-text-weight-semibold">
                Machine Learning / AI
                <progress
                  className="progress is-small is-link"
                  value="40"
                  max="100"
                ></progress>
              </li>
            </ul>
          </span>
          <span className="section">
            <p className="subtitle">Tech Stack</p>
            <ul className={styles['tech-stack']}>
              {skills.map((s) => (
                <li>
                  <img
                    className="image is-24x24"
                    data-tip
                    data-for={s[0]}
                    src={s[1]}
                    alt={s[0]}
                  />
                  <ReactTooltip id={s[0]} place="top" effect="solid">
                    {s[0]}
                  </ReactTooltip>
                </li>
              ))}
            </ul>
          </span>
        </article>
      </section>
    </section>
  );
}
