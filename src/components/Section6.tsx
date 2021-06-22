import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { BsFillHeartFill } from 'react-icons/bs';
import styled from '../styles/components/Section6.module.scss';

const Section6: React.FC = () => {
  return (
    <section className={styled.section} id="doar">
      <Container className={styled.content}>
        <h2 className="title">Parceiros</h2>
      </Container>

      <Container className={styled.contentInfos}>
        <Grid container spacing={3}>
          <Grid item xs>
            <a
              href="http://twitch.tv/gaules"
              target="_blank"
              rel="noopener noreferrer">
              <img src="/static/images/gaules.png" alt="" />
            </a>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Section6;
