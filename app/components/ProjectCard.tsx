import SkillPill from "./SkillPill";
interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    url?: string;
    skills: string[];
    image: string;
  };
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, url, description, skills, image } = project;
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <div className='job-card' onClick={handleClick}>
      <div className='company-container'>
        <h4>{name}</h4>
        {url && (
          <span className='url-icon'>
            <i className='fa-solid fa-arrow-up-right-from-square'></i>
          </span>
        )}
      </div>
      <p>{description}</p>
      <img src={image} />
      <div className='skills-container'>
        {skills.map((skill) => (
          <SkillPill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
