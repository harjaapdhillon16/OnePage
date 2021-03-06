import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  width: 100%;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : '')};
  border: 0px solid ${theme.textColorLite};
  border-bottom-width: 0.8px;
`;

const HeadingWithImageSpotLight = ({ title, image, reverse }) => {
  return (
    <Container
      reverse={reverse}
      className="columns is-multiline is-vcentered is-gapless"
    >
      <div className="column is-1" />
      <div className="column is-7">
        <section className="section">
          <h1 className="title is-1 has-text-weight-light">{title}</h1>
          <h1 className="subtitle is-6 	has-text-black">
            This is a Spotlight element, and it&#39;s generally used – as its
            name implies – to spotlight a particular feature, subject, or pretty
            much whatever. You can customize its{' '}
            <span className="underline">
              style, scheme, color, orientation, content alignment , and image
              position,
            </span>
            as well as assign it an optional{' '}
            <span className="code">onload</span> or{' '}
            <span className="code">onscroll</span> transition modifier
            (details).
          </h1>
          <button className="button is-medium" type="button">
            <h1 className="title has-text-weight-light is-4">Get Started</h1>
          </button>
        </section>
      </div>
      <div className="column is-4">
        <figure className="image is-square">
          <img alt="mountain" src={`images/${image}.jpg`} />
        </figure>{' '}
      </div>
    </Container>
  );
};
export default HeadingWithImageSpotLight;
