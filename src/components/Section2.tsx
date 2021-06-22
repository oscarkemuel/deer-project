import { Container } from '@material-ui/core';
import { FaChild } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import CountUp from 'react-countup';

import styled from '../styles/components/Section2.module.scss';

const Section2: React.FC = () => {
  return (
    <section className={styled.section} id="">
      <Container className={styled.content}>
        <div>
          <FaChild />
          <p className="number">
            <CountUp end={30} duration={5} prefix="+" />
          </p>
          <p>crianças foram ajudadas a lidar com sua forma de ser</p>
        </div>

        <div>
          <GiPayMoney />
          <p className="number">
            <CountUp
              end={450000}
              duration={5}
              prefix="+R$ "
              decimals={2}
              decimal=","
            />
          </p>
          <p>já foram arrecadados para a causa</p>
        </div>
      </Container>
    </section>
  );
};

export default Section2;
