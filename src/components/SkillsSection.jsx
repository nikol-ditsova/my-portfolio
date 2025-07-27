import TechnicalSkills from "./TechnicalSkills";
import ProfessionalSkills from "./ProfessionalSkills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-10 px-6">
      <h2 className="text-4xl mainFont font-semibold mb-6 text-center">SKILLS</h2>

      <div>
        <h3 className="text-2xl mainFont font-semibold mb-2">Technical</h3>
        <hr></hr>
        <div>
          <TechnicalSkills/>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl mainFont font-semibol mb-2 text-end">Professional</h3>
        <hr></hr>
        <div>
          <ProfessionalSkills/>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
