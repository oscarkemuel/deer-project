import { Container } from '@material-ui/core';
import { FaChild } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from '../styles/components/Section2.module.scss';
import 'animate.css/animate.min.css';

const Section2: React.FC = () => {
  return (
    <section className={styled.section} id="">
      <Container className={styled.content}>
        <ScrollAnimation animateIn="bounceInLeft" duration={0.5}>
          <div>
            <FaChild />
            <p className="number">
              <CountUp end={30} duration={5} prefix="+" />
            </p>
            <p>crianças foram ajudadas a lidar com sua forma de ser</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInRight" duration={0.5}>
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
        </ScrollAnimation>
      </Container>
    </section>
  );
};

export default Section2;
