import { AiFillHome, AiFillStar, AiFillProject } from 'react-icons/ai';
import { BsFillHeartFill } from 'react-icons/bs';
import styled from '../styles/components/Nav.module.scss';

const Nav: React.FC = () => {
  return (
    <nav className={styled.nav}>
      <ul>
        <li>
          <a href="#home">
            <AiFillHome />
            <p>Home</p>
          </a>
        </li>

        <li>
          <a href="#proposito">
            <AiFillStar />
            <p>Propósito</p>
          </a>
        </li>

        <li>
          <a href="#historia">
            <AiFillProject />
            <p>Historia</p>
          </a>
        </li>

        <li>
          <a href="#doar">
            <BsFillHeartFill />
            <p>DOAR</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
