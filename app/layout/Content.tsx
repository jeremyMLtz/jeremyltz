import Socials from "~/components/Socials";
import About from "~/components/About";
import Jobs from "~/components/Jobs";
import Projects from "~/components/Projects";
import React from "react";
import Footer from "~/components/Footer";

interface ContentProps {
  sectionRefs: {
    about: React.Ref<HTMLElement>;
    experience: React.Ref<HTMLElement>;
    projects: React.Ref<HTMLElement>;
  };
}

const Content = ({ sectionRefs }: ContentProps) => (
  <main>
    <About ref={sectionRefs.about} />
    <hr />
    <Projects ref={sectionRefs.projects} />
    <hr />
    <Jobs ref={sectionRefs.experience} />
    <Socials className='content-socials' />
    <Footer />
  </main>
);
export default Content;
