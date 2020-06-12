import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  padding-top: 2rem;
  span {
    height: 3rem;
    width: 3rem;
    border: 1px solid ${theme.textColorLite};
    border-radius: 3rem;
  }
`;
const SocialIcons = [
  {
    icon: 'fab fa-twitter',
  },
  {
    icon: 'fab fa-facebook-f',
  },
  {
    icon: 'fab fa-instagram',
  },
  {
    icon: 'fab fa-github',
  },
  {
    icon: 'fas fa-basketball-ball',
  },
];

const Icons = () => {
  return (
    <Container className="columns is-multiline borderBottom">
      <div className="column is-4 has-text-left">
        <h2 className="subtitle is-3">Icons</h2>
      </div>
      <div className="column is-7 has-text-left">
        <h1 className="subtitle is-6">Style #1</h1>
        <div className="columns is-mobile">
          {SocialIcons.map(data => (
            <div className="column is-1">
              <i className={data.icon} />
            </div>
          ))}
        </div>
        <h1 className="subtitle is-6">Style #2</h1>
        <div className="columns is-mobile">
          {SocialIcons.map(data => (
            <div className="column is-2">
              <span className="icon is-size-4">
                <i className={data.icon} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Icons;
