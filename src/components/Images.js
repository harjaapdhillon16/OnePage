/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  img {
    object-fit: cover;
    border-radius: 8px;
  }
`;

const Images = () => {
  return (
    <Container className="columns has-text-left borderBottom">
      <div className="column is-4">
        <h1 className="subtitle is-4 has-text-weight-light has-text-black">
          Images
        </h1>
      </div>
      <div className="column is-8">
        <div className="columns is-multiline">
          <div className="column is-12">
            <h1 className="subtitle is-4 has-text-weight-light has-text-black">
              Fit
            </h1>
            <img alt="nature" src="images/mountain.jpg" />
          </div>

          <div className="column is-12">
            <h1 className="subtitle is-4 has-text-weight-light has-text-black">
              Left
            </h1>
            <div className="columns">
              <div className="column is-3">
                {' '}
                <figure className="image is-square">
                  <img alt="nature" src="images/camera.jpg" />{' '}
                </figure>
              </div>
              <div className="column is-9">
                <h1 className="subtitle is-5 has-text-weight-light has-text-black">
                  Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt
                  felis sagittis eget. tempus euismod. Vestibulum ante ipsum
                  primis in faucibus vestibulum. Blandit adipiscing eu felis
                  iaculis volutpat ac adipiscing accumsan eu faucibus. Integer
                  ac pellentesque praesent tincidunt felis sagittis eget. tempus
                  euismod. Vestibulum ante ipsum primis sagittis eget. tempus
                  euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
                  Blandit adipiscing eu felis iaculis volutpat ac adipiscing
                  accumsan eu faucibus. Integer ac pellentesque praesent
                  tincidunt felis sagittis eget. tempus euismod. Vestibulum ante
                  ipsum primis in faucibus vestibulum. Blandit adipiscing eu
                  felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                  Integer ac pellentesque praesent. Vestibulum ante ipsum primis
                  in faucibus magna blandit adipiscing eu felis iaculis volutpat
                  lorem ipsum dolor sit amet dolor consequat.
                </h1>
              </div>
            </div>
          </div>
          <div className="column is-12">
            <h1 className="subtitle is-4 has-text-weight-light has-text-black">
              Right
            </h1>
            <div className="columns">
              <div className="column is-9">
                <h1 className="subtitle is-5 has-text-weight-light has-text-black">
                  Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt
                  felis sagittis eget. tempus euismod. Vestibulum ante ipsum
                  primis in faucibus vestibulum. Blandit adipiscing eu felis
                  iaculis volutpat ac adipiscing accumsan eu faucibus. Integer
                  ac pellentesque praesent tincidunt felis sagittis eget. tempus
                  euismod. Vestibulum ante ipsum primis sagittis eget. tempus
                  euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
                  Blandit adipiscing eu felis iaculis volutpat ac adipiscing
                  accumsan eu faucibus. Integer ac pellentesque praesent
                  tincidunt felis sagittis eget. tempus euismod. Vestibulum ante
                  ipsum primis in faucibus vestibulum. Blandit adipiscing eu
                  felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                  Integer ac pellentesque praesent. Vestibulum ante ipsum primis
                  in faucibus magna blandit adipiscing eu felis iaculis volutpat
                  lorem ipsum dolor sit amet dolor consequat.
                </h1>
              </div>
              <div className="column is-3">
                {' '}
                <figure className="image is-square">
                  <img alt="nature" src="images/camera.jpg" />{' '}
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Images;
