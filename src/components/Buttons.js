import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  padding-top: 2rem;
  button {
    border-radius: 100px !important;
  }
  .black {
    background-color: ${theme.textColor} !important;
  }
  .normal {
    width: 10rem !important;
    height: 3rem;
  }
  .large {
    width: 10rem !important;
    height: 3.5rem;
  }
  .small {
    width: 5rem !important;
    height: 2rem;
  }
  .fit {
    width: 12rem !important;
    height: 3rem;
  }
  .smallFit {
    width: 12rem !important;
    height: 2rem;
  }
  .disabled {
    opacity: 0.7 !important;
  }
`;

const Buttons = () => {
  return (
    <Container className="columns is-multiline borderBottom">
      <div className="column is-4 has-text-left">
        <h2 className="subtitle is-3">Buttons</h2>
      </div>
      <div className="column is-7 has-text-left">
        <div className="columns">
          <div className="column is-3">
            <button type="button" className="button is-primary black normal">
              PRIMARY
            </button>
          </div>
          <div className="column is-3">
            <button type="button" className="button normal">
              PRIMARY
            </button>
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">
            <button type="button" className="button is-primary black large">
              LARGE
            </button>
          </div>
          <div className="column is-3">
            <button type="button" className="button large">
              LARGE
            </button>
          </div>
          <div className="column is-3">
            <button type="button" className="button is-small small">
              SMALL
            </button>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4">
            <button type="button" className="button is-primary black fit">
              FIT
            </button>
          </div>
          <div className="column is-4">
            <button type="button" className="button fit">
              FIT
            </button>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4">
            <button
              type="button"
              className="button is-primary black is-small smallFit"
            >
              FIT+SMALL
            </button>
          </div>
          <div className="column is-4">
            <button type="button" className="button is-small smallFit">
              FIT+SMALL
            </button>
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">
            <button type="button" className="button is-primary black normal">
              <span className="icon is-small">
                <i className="fas fa-search" />
              </span>
              <span>ICON</span>
            </button>
          </div>
          <div className="column is-3">
            <button type="button" className="button normal">
              <span className="icon is-small">
                <i className="fas fa-search" />
              </span>
              <span>ICON</span>
            </button>
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">
            <button
              type="button"
              className="button is-primary black normal disabled"
            >
              FIT+SMALL
            </button>
          </div>
          <div className="column is-3">
            <button type="button" className="button normal disabled">
              FIT+SMALL
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Buttons;
