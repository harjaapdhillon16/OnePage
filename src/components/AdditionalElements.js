import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';
import TextSection from './TextSection';
import HeadingSection from './HeadingSection';
import List from './List';

const Section = styled.section`
  .is-6 {
    line-height: 1.5rem;
  }
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .borderBottom {
    border: 0px solid ${theme.textColorLite};
    border-bottom-width: 1px;
    padding-bottom: 2rem;
  }
`;

const AdditionalElements = () => {
  return (
    <Section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered is-multiline">
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

        <TextSection />
        <HeadingSection />
        <List />
      </div>
    </Section>
  );
};
export default AdditionalElements;
