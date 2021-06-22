import React from 'react';
import { Container } from '@material-ui/core';
import { AiFillStar } from 'react-icons/ai';

import styled from '../styles/components/Section3.module.scss';

const Section3: React.FC = () => {
  return (
    <section className={styled.section} id="proposito">
      <Container className={styled.content}>
        <AiFillStar />

        <h2 className="title">O NOSSO PROPÓSITO</h2>

        <p className="text">
          Nosso principal objetivo é ajudar, de forma financeira, crianças
          diagnosticadas com Autismo Severo. O tratamento é maximizar a
          capacidade de funcionamento da criança, reduzindo os sintomas que
          podem ser um problema futuro.
        </p>

        <div className={`${styled.link} title`}>
          <a
            href="https://www.funcionalita.com.br/quais-sao-os-graus-de-classificacao-do-autismo#:~:text=Conforme%20o%20DSM%20V%2C%20os,precisa%20de%20um%20suporte%20substancial."
            target="_blank"
            rel="noopener noreferrer">
            O que é Austimo?
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Section3;
