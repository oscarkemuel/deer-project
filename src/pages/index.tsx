import Head from 'next/head';
import Header from '../components/Header';
import Section1 from '../components/Section1';

const index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projeto Deercheerup</title>
      </Head>
      <Header />
      <Section1 />
    </>
  );
};

export default index;
