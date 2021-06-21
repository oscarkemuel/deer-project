import React from 'react';
import { Container, Button } from '@material-ui/core';
import { AiFillPlayCircle } from 'react-icons/ai';
import styled from '../styles/components/Section1.module.scss';

const Section1: React.FC = () => {
  return (
    <section className={styled.section} id="#home">
      <Container className={styled.content}>
        <h1 className="title">Que a inclusão seja regra e nunca exceção</h1>
        <Button style={{ marginTop: '1.5rem' }}>
          <a
            href="https://www.youtube.com/embed/vBvuW3xVTY8?rel=0&autoplay=1;fs=0;autohide=0;hd=0;"
            target="_blank"
            rel="noopener noreferrer">
            <AiFillPlayCircle />
          </a>
        </Button>
      </Container>
      <div className={`${styled.link} title`}>
        <a href="#doar">doe agora</a>
      </div>
    </section>
  );
};

export default Section1;
