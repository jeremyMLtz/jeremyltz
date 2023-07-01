import { useState, useEffect, useRef } from "react";
import Header from "../layout/Header";
import Content from "../layout/Content";

export default function Index() {
  const [activeLink, setActiveLink] = useState("");

  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "25px",
      threshold: 1.0,
    };

    const handleIntersect = (entries: any[]) => {
      entries.forEach((entry: { isIntersecting?: any; target?: any }) => {
        const { target } = entry;
        const id = target.getAttribute("id");

        if (entry.isIntersecting) {
          setActiveLink(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (!ref.current) {
        return;
      }
      observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (!ref.current) {
          return;
        }
        observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);
  return (
    <div className='main-content'>
      <Header activeLink={activeLink} />
      <Content sectionRefs={sectionRefs} />
    </div>
  );
}
