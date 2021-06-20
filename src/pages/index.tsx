import Head from 'next/head';
import { Button } from '@material-ui/core';
import styled from '../styles/pages/index.module.scss';

const index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Deercheerup</title>
      </Head>
      <h1 className={styled.title}>Hello world!</h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </>
  );
};

export default index;
