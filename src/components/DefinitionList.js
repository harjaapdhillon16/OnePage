import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  justify-content: flex-end;
`;

const Definition = () => {
  return (
    <Container className="columns is-multiline borderBottom ">
      <div className="column is-4 has-text-left ">
        <h2 className="subtitle is-3 has-text-weight-light">Definition List</h2>
      </div>
      <div className="column is-8 has-text-left">
        <h2 className="subtitle is-4 has-text-weight-light">
          Interdum adipiscing odio
        </h2>
        <div className="content">
          <ul>
            Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
            vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            fringilla quis tincidunt felis sagittis eget tempus euismod. Ante
            ipsum primis vestibulum.
          </ul>
        </div>
      </div>
      <div className="column is-8 has-text-left">
        <h2 className="subtitle is-4 has-text-weight-light">
          Non faucibus ornare mi ut ante
        </h2>
        <div className="content">
          <ul>
            Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
            vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            fringilla quis tincidunt felis sagittis eget tempus euismod. Ante
            ipsum primis vestibulum.
          </ul>
        </div>
      </div>
      <div className="column is-8 has-text-left">
        <h2 className="subtitle is-4 has-text-weight-light">
          Felis amet dolore viverra
        </h2>
        <div className="content">
          <ul>
            Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
            vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            fringilla quis tincidunt felis sagittis eget tempus euismod. Ante
            ipsum primis vestibulum.
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default Definition;
