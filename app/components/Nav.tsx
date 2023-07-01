import { HeaderProps } from "~/utilities/helpers";

const Nav = ({ activeLink }: HeaderProps) => {
  return (
    <nav>
      <a className={activeLink === "about" ? "active" : ""} href='#about'>
        About
      </a>
      <a
        className={activeLink === "experience" ? "active" : ""}
        href='#experience'>
        Experience
      </a>
      <a className={activeLink === "projects" ? "active" : ""} href='#projects'>
        Projects
      </a>
    </nav>
  );
};

export default Nav;
