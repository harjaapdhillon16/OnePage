import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  width: 100%;
  border: 0px solid ${theme.textColorLite};
  border-bottom-width: 0.8px;
`;

const HeadingWithImage = () => {
  return (
    <Container className="columns is-multiline is-vcentered is-gapless">
      <div className="column is-1" />
      <div className="column is-5">
        <section className="section">
          <h1 className="title is-1 has-text-weight-light">Story</h1>
          <h1 className="title is-5 has-text-weight-normal">
            A (modular, highly tweakable) responsive one-page template designed
            by <span className="underline">HTML5 UP</span> and released for free
            under the Creative Commons.
          </h1>
          <h1 className="subtitle is-6 has-text-black	">
            This is a Banner element, and it's generally used as an introduction
            or opening statement. You can customize its style, scheme, color,
            size, orientation, content alignment, and image position, as well as
            assign it an optional <span className="code">onload</span> or{' '}
            <span className="code">onscroll</span> transition modifier
            (details).
          </h1>
          <button className="button is-medium" type="button">
            <h1 className="title has-text-weight-light is-4">Get Started</h1>
          </button>
        </section>
      </div>
      <div className="column is-6">
        <figure className="image is-square">
          <img alt="mountain" src="images/mountain.jpg" />
        </figure>{' '}
      </div>
    </Container>
  );
};
export default HeadingWithImage;
