import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  padding-top: 2rem;
  .is-4 {
    border: 0px solid ${theme.textColorLite};
    border-right-width: 4px;
  }
`;

const BlockQuote = () => {
  return (
    <Container className="columns is-multiline borderBottom">
      <div className="column is-4 has-text-left">
        <h2 className="subtitle is-3">BlockQuote</h2>
      </div>
      <div className="column is-7 has-text-left">
        <h2 className="subtitle is-6 has-text-weight-light italic">
          Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum.
          Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
          faucibus. Integer ac pellentesque praesent fringilla quis tincidunt
          felis sagittis eget tempus euismod. Ante ipsum primis vestibulum.
        </h2>
      </div>
    </Container>
  );
};
export default BlockQuote;
