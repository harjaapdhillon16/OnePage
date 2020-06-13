import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .is-8 {
    padding: 1rem;
    border: 1px solid ${theme.borderColor};
    margin-top: 1rem;
    border-radius: 8px;
  }
`;

const Box = () => {
  return (
    <Container className="columns is-multiline borderBottom">
      <div className="column is-4 has-text-left">
        <h2 className="subtitle is-3">Box</h2>
      </div>
      <div className="column is-8 has-text-left">
        <h1 className="subtitle is-5 has-text-weight-light">
          Felis sagittis eget tempus primis in faucibus vestibulum. Blandit
          adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
          faucibus. Integer ac pellentesque praesent tincidunt felis sagittis
          eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus
          vestibulum. Blandit adipiscing eu ipsum primis in faucibus vestibulum.
          Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
          faucibus lorem ipsum dolor sit amet nullam.
        </h1>
      </div>
    </Container>
  );
};
export default Box;
