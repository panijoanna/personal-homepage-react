import Section from "../../common/Section/index";
import { skillset } from "./skillset/skillset";
import { skillsToLearn } from "./skillset/skillsToLearn";

const Skills = () => {
  return (
    <>
      <Section title="My skillset included" array={skillset} />
      <Section title="What I want to learn next" array={skillsToLearn} />
    </>
  );
};

export default Skills;
