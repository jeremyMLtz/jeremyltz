import { forwardRef, Ref } from "react";
import { JOBS } from "~/utilities/helpers";
import JobCard from "~/components/JobCard";
const Jobs = forwardRef<HTMLElement, {}>(({}, ref: React.Ref<HTMLElement>) => (
  <section ref={ref} id='experience'>
    <h3 className='section-header'>Experience</h3>
    <div className='experience-content'>
      {JOBS.map((job) => (
        <JobCard key={job.duration} job={job} />
      ))}
    </div>
  </section>
));

export default Jobs;
