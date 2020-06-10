import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .is-5 {
    line-height: 2rem;
  }
`;

const AdditionalElements = () => {
  return (
    <Section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-10">
            <h1 className="subtitle is-2 has-text-weight-light has-text-black">
              Additional Elements
            </h1>
            <h1 className="subtitle is-6 has-text-grey has-text-weight-normal has-text-black">
              Finally, here are some additional elements you might find useful
              (and yup, they look fine with any{' '}
              <span className="underline">scheme</span> and{' '}
              <span className="underline">color</span>).
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AdditionalElements;
