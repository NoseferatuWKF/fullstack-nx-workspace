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
    </div>
  );
}

export default App;
