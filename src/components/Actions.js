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
    width: 15rem !important;
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

const Actions = () => {
  return (
    <Container className="columns is-multiline borderBottom">
      <div className="column is-4 has-text-left">
        <h2 className="subtitle is-3">Actions</h2>
      </div>
      <div className="column is-7 has-text-left">
        <h1 className="subtitle is-6"> Defaults</h1>
        <div className="columns is-multiline is-mobile">
          <div className="column ">
            <button type="button" className="button is-primary black normal">
              DEFAULT
            </button>
          </div>
          <div className="column ">
            <button type="button" className="button normal">
              DEFAULT
            </button>
          </div>
        </div>
        <h1 className="subtitle is-6"> Small</h1>
        <div className="columns is-multiline is-mobile">
          <div className="column is-3">
            <button type="button" className="button is-primary black small">
              Small
            </button>
          </div>
          <div className="column is-2">
            <button type="button" className="button small">
              Small
            </button>
          </div>
        </div>
        <h1 className="subtitle is-6"> Stacked</h1>
        <div className="columns is-multiline is-mobile">
          <div className="column is-12">
            <button type="button" className="button is-primary black fit">
              Fit
            </button>
          </div>
          <div className="column is-12">
            <button type="button" className="button fit">
              Fit
            </button>
          </div>
        </div>
        <h1 className="subtitle is-6"> Stacked+Fit</h1>
        <div className="columns is-multiline is-mobile">
          <div className="column is-12">
            <button type="button" className="button is-primary black fit">
              Fit
            </button>
          </div>
          <div className="column is-12">
            <button type="button" className="button fit">
              Fit
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Actions;
