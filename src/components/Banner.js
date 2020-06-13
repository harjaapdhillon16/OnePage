import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 1rem;
`;

const Banner = () => {
  return (
    <Container className="columns">
      <div className="column is-4 has-text-left">
        <h1 className="subtitle is-3 has-text-weight-light">Banner</h1>
      </div>
      <div className="column is-8 has-text-left">
        <h1 className="subtitle is-4 has-text-weight-light">HTML</h1>
        <h2 className="subtitle is-6 code">
          {`<section class="banner style(N) (optional modifiers)">`}
          <br /> {`<div class="content">`}
          <br />
          {`   (content)`}
          <br />
          {`</div>`}
          <br />
          {`<div class="image">`}
          <br />
          {`  <img src="(image URL)" alt="Alternate text" />`}
          <br />
          {`</div>`}
          <br />
          {`</section>`}
        </h2>
      </div>
    </Container>
  );
};
export default Banner;
