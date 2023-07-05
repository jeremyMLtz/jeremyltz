import { forwardRef, Ref } from "react";

const About = forwardRef<HTMLElement, {}>(({}, ref: Ref<HTMLElement>) => (
  <section ref={ref} id='about'>
    <h3 className='section-header'>About</h3>
    <div className='about-content'>
      <p>
        The year was 2016. I had always loved creating stories and building
        worlds, and I decided it was time to try telling stories using a new
        medium: building a video game. After watching countless YouTube
        tutorials, reading documentation, and fixing bugs, I realized my passion
        was for the programming aspect of game development. I knew that I wanted
        to write code for a living, whether it was for games or the web.
      </p>
      <p>
        Fast forward a few months, and I found myself interviewing for a sales
        job at a tech company. I was hired by <strong>BombBomb</strong> as a
        BDR, responsible for scheduling product demos for our sales team.
        However, I quickly transitioned into a QA role, and that's when my
        engineering skills really started to flourish. In between taking Udemy
        or Treehouse courses, I immersed myself in reviewing pull requests from
        our senior developers, writing automated tests, and even doing some full
        stack work. It didn't take long before I was promoted to an engineering
        role, and from that point on, there was no looking back.
      </p>
      <p>
        These days, I dedicate most of my time to working on my startup
        <strong> SimplMachine</strong>, where we develop solutions for
        automation engineers. Simultaneously, I'm always on the lookout for new
        opportunities. When I'm not coding, you can find me exploring the woods,
        creating music, working on some creative writing, or developing my dream
        game (stay tuned for more updates on that soon).
      </p>
    </div>
  </section>
));

export default About;
