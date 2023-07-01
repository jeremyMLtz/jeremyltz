import { HeaderProps } from "~/utilities/helpers";

const Nav = ({ activeLink }: HeaderProps) => {
  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    return element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav>
      <a
        onClick={() => handleScroll("about")}
        className={activeLink === "about" ? "active" : ""}>
        About
      </a>
      <a
        onClick={() => handleScroll("experience")}
        className={activeLink === "experience" ? "active" : ""}>
        Experience
      </a>
      <a
        onClick={() => handleScroll("projects")}
        className={activeLink === "projects" ? "active" : ""}>
        Projects
      </a>
    </nav>
  );
};

export default Nav;
