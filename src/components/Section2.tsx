import { Container, Button } from '@material-ui/core';
import { AiFillPlayCircle } from 'react-icons/ai';
import styled from '../styles/components/Section2.module.scss';

const Section2: React.FC = () => {
  return (
    <section className={styled.section} id="">
      <Container className={styled.content}>
        <h1>hello</h1>
      </Container>
    </section>
  );
};

export default Section2;
