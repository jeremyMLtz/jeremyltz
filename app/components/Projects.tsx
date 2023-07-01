import { forwardRef, Ref } from "react";
import { PROJECTS } from "~/utilities/helpers";
import ProjectCard from "~/components/ProjectCard";
const Projects = forwardRef<HTMLElement, {}>(({}, ref: Ref<HTMLElement>) => (
  <section ref={ref} id='projects'>
    <h3 className='section-header'>Projects</h3>
    <div className='experience-content'>
      {PROJECTS.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </section>
));

export default Projects;
