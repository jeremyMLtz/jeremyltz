interface SkillPillProps {
  skill: string;
}
const SkillPill = ({ skill }: SkillPillProps) => (
  <span className='skill-pill'>{skill}</span>
);

export default SkillPill;
