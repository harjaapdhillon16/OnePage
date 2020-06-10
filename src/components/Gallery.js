import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .is-5 {
    line-height: 2rem;
  }
`;

const Gallery = () => {
  return (
    <Section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-10">
            <h1 className="subtitle is-2 has-text-weight-light has-text-black">
              Gallery
            </h1>
            <h1 className="subtitle is-5 has-text-weight-normal has-text-black">
              This is a Gallery element. It can behave as a lightbox (when given
              the <span className="code">lightbox</span> class), and you can
              customize its style and size, as well as assign it an optional
              <span className="code">onload</span> or{' '}
              <span className="code">onscroll</span> transition modifier
              (details).
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Gallery;
