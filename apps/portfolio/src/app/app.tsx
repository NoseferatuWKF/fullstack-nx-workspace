import ReactTooltip from "react-tooltip";
import { PersonalInfo } from './personal-info/personal-info';
import { SkillSet } from './skill-set/skill-set';
import { LearningStack } from './learning-stack/learning-stack';
import { Interests } from './interests/interests';
import { ResumeBody } from "./resume-body/resume-body";
import { Footer } from "./footer/footer";

export function App() {
  return (
    <div>
      <div className="container is-fluid section">
        <div className="tile is-ancestor">
          <aside className="tile is-parent is-vertical is-3">
            <PersonalInfo></PersonalInfo>
            <SkillSet></SkillSet>
            <LearningStack></LearningStack>
            <Interests></Interests>
          </aside>
          <main className="tile is-parent">
            <ResumeBody></ResumeBody>
          </main>
        </div>
      </div>
      <Footer></Footer>
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
