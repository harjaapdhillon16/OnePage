import React from 'react';
import styled from 'styled-components';

import IndividualItem from './IndividualItem';

const Section = styled.section`
  .is-5 {
    line-height: 2rem;
  }
`;

const Items = () => {
  return (
    <Section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-10">
            <h1 className="subtitle is-2 has-text-weight-light has-text-black">
              Items
            </h1>
            <h1 className="subtitle is-5 has-text-weight-normal has-text-black">
              This is an Items element, and it&#39;s basically just a grid for
              organizing items of various types. You can customize its style and
              size, as well as assign it an optional{' '}
              <span className="code">onload</span> or{' '}
              <span className="code">onscroll</span> transition modifier
              (details).
            </h1>
            {/* map for the IndividualItem in the item container */}
            <div className="columns is-multiline is-centered">
              <div className="column is-4">
                <IndividualItem />
              </div>
              <div className="column is-4">
                <IndividualItem />
              </div>
              <div className="column is-4">
                <IndividualItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Items;
