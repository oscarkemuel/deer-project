import Head from 'next/head';
import styled from '../styles/pages/index.module.scss';

const index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Deercheerup</title>
      </Head>
      <h1 className={styled.title}>Hello world!</h1>
    </>
  );
};

export default index;
