import { AiFillHome, AiFillStar, AiFillProject } from 'react-icons/ai';
import { BsFillHeartFill } from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from '../styles/components/Nav.module.scss';

const Nav: React.FC = () => {
  return (
    <nav className={styled.nav}>
      <ul>
        <li>
          <AnchorLink href="#home">
            <AiFillHome />
            <p>Home</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#proposito">
            <AiFillStar />
            <p>Propósito</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#historia">
            <AiFillProject />
            <p>Historia</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#doar">
            <BsFillHeartFill />
            <p>DOAR</p>
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
