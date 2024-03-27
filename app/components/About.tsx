import { forwardRef, Ref } from "react";

const About = forwardRef<HTMLElement, {}>(({}, ref: Ref<HTMLElement>) => (
  <section ref={ref} id='about'>
    <h3 className='section-header'>About</h3>
    <div className='about-content'>
      <p>
        My journey in software engineering began the same as alot of the other
        engineers I know...with game development. It started off as a hobby but
        after programming a few games, I found writing code was fun and I wanted
        to try my hand at web development.
      </p>
      <p>
        Fast forward a few months, and I found myself interviewing for a sales
        job at a tech company. I was hired by <strong>BombBomb</strong> as a
        BDR, responsible for scheduling product demos for our sales team.
        However, I quickly transitioned into a QA Engineer role, where I helped
        build the department from the ground up. I spent my time developing QA
        processes, building out our automation suite from the ground up and
        mentoring new QA Analysts. After a few years, I finally moved into my
        goal role as a Software Engineer. Throughout the years as an engineer I
        built an A/B onboarding tool that drove user adoption updwards of 50%,
        lead the development of a new feature that generated over $1M in sales,
        mentored junior engineers, was a lead member of our Module Library
        Guild, and championed writing well-tested code.
      </p>
      <p>
        These days, in between looking for my next career opportunity, I
        dedicate most of my time to working on my startup
        <strong> SimplMachine</strong>, where we develop solutions for
        automation engineers while also developing my dream game. When I'm not
        coding, you can find me exploring the woods, creating music, or taking
        pictures of birds.
      </p>
    </div>
  </section>
));

export default About;
