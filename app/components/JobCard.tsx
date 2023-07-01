import SkillPill from "./SkillPill";
interface JobCardProps {
  job: {
    company: string;
    role: string;
    url?: string;
    duration: string;
    description: string;
    skills: string[];
  };
}
const JobCard = ({ job }: JobCardProps) => {
  const { company, role, url, duration, description, skills } = job;
  const handleClick = () => {
    if (company === "SimplMachine") {
      return;
    }
    window.open(url, "_blank");
  };
  return (
    <div className='job-card' onClick={handleClick}>
      <span className='duration mono'>{duration}</span>
      <div className='company-container'>
        <h4>{`${role} - ${company}`}</h4>
        {url && (
          <span className='url-icon'>
            <i className='fa-solid fa-arrow-up-right-from-square'></i>
          </span>
        )}
      </div>
      <p>{description}</p>
      <div className='skills-container'>
        {skills.map((skill) => (
          <SkillPill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default JobCard;
