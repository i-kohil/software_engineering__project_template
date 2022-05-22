import React from 'react';
import Icon1 from '../../images/haircut.jpg';
import Icon2 from '../../images/beard.jpg';
import Icon3 from '../../images/dye.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>haircuts </ServicesH2>
          <ServicesP>
            our goal is to make scheduling appointments an easier experience for both the staff and customers.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>beard trimming </ServicesH2>
          <ServicesP>
            You can access our platform online anytime and anywhere in the world .
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>hair dye</ServicesH2>
          <ServicesP>
           easy to use on the go for all age groups.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
