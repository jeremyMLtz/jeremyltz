import Intro from "~/components/Intro";
import Nav from "~/components/Nav";
import Socials from "~/components/Socials";
import { HeaderProps } from "~/utilities/helpers";
const Header = ({ activeLink }: HeaderProps) => {
  return (
    <header>
      <Intro />
      <Nav activeLink={activeLink} />
      <Socials className='header-socials' />
    </header>
  );
};
export default Header;
