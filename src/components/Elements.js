import React from 'react';
import styled from 'styled-components';

import Banner from './Banner';
import BannerStyle1 from './BannerStyle1';

const Section = styled.section`
  .column {
    justify-content: flex-end;
  }
`;

const Elements = () => {
  return (
    <Section className="section">
      <div className="container has-text-centered">
        <h1 className="subtitle is-2 has-text-weight-light has-text-black">
          Elements
        </h1>
        <h1 className="subtitle is-5 has-text-weight-normal">
          Oh, and this: a handy reference to all the modifiers supported by
          various elements.
        </h1>
        <Banner />
        <BannerStyle1 />
      </div>
    </Section>
  );
};
export default Elements;
