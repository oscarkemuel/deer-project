import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { BsFillHeartFill } from 'react-icons/bs';
import styled from '../styles/components/Section5.module.scss';

const Section5: React.FC = () => {
  return (
    <section className={styled.section} id="doar">
      <Container className={styled.content}>
        <BsFillHeartFill />
        <h2 className="title">Como posso ajudar?</h2>
      </Container>

      <Container className={styled.contentInfos}>
        <Grid container spacing={3}>
          <Grid item xs>
            <h3 className="text">Tranferência</h3>
            <div className={styled.line} />
            <div className={styled.text}>
              <p className="text">Conta: ......-.</p>
              <p className="text">Agência: ....-.</p>
            </div>
          </Grid>
          <Grid item xs>
            <h3 className="text">Pix</h3>
            <div className={styled.line} />
            <div className={styled.text}>
              <p className="text">Chave: ...</p>
            </div>
          </Grid>
          <Grid item xs>
            <h3 className="text">Strem do Lindinho</h3>
            <div className={styled.line} />
            <div className={styled.text}>
              <p className="text">Inscrição</p>
              <p className="text">Doação</p>
              <p className="text">BITS</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Section5;
