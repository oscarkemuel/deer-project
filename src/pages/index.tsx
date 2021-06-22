import Head from 'next/head';
import Header from '../components/Header';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';

const index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projeto Deercheerup</title>
      </Head>
      <Header />
      <Section1 />
      <Section2 />
    </>
  );
};

export default index;
