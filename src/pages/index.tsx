import Head from 'next/head';
import Fab from '@material-ui/core/Fab';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BsFillHeartFill } from 'react-icons/bs';
import styled from '../styles/pages/index.module.scss';

import Header from '../components/Header';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';

const index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projeto Deercheerup</title>
      </Head>

      <Fab color="secondary" aria-label="add" className={styled.iconDonate}>
        <AnchorLink href="#doar">
          <BsFillHeartFill />
        </AnchorLink>
      </Fab>

      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
};

export default index;
