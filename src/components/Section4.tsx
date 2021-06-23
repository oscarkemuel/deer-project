import React from 'react';
import { Container } from '@material-ui/core';
import { AiFillProject } from 'react-icons/ai';
import styled from '../styles/components/Section4.module.scss';

const Section4: React.FC = () => {
  return (
    <section className={styled.section} id="historia">
      <Container className={styled.content}>
        <AiFillProject />
        <h2 className="title">Funcionamento</h2>
      </Container>

      <Container className={styled.contentInfos}>
        <h3 className="text">Como funciona</h3>
        <div className={styled.line} />
        <div className={styled.text}>
          <p className="text">
            Em média, 4 criançãs são selecionadas por ano para serem ajudadas em
            seus tratamentos, que custam em média R$ 36.000,00. A criança
            selecinada passará pela ciência de{' '}
            <a
              href="https://www.youtube.com/watch?v=aOX80cX7kd0"
              target="_blank"
              rel="noopener noreferrer">
              Análise do Comportamento Aplicada (ABA)
            </a>
            , e terá todo o acompanhamento em sua infância, por isso, o
            tratamento possui um valor elevado. Hoje, a principal renda do
            projeto vem das streams do idealizador do projeto{', '}
            <a
              href="http://twitch.tv/deercheerup"
              target="_blank"
              rel="noopener noreferrer">
              Lindinho
            </a>
            . Todo dinheiro arrecadado em suas lives são direcionados para a
            causa.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Section4;
