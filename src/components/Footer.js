import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const FooterStyled = styled.footer`
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

const Footer = () => {
  return (
    <FooterStyled className="footer">
      <div className="content has-text-centered">
        <div className="columns is-centered ">
          {SocialIcons.map(data => (
            <div className="column is-1">
              <span className="icon is-size-4">
                <i className={data.icon} />
              </span>
            </div>
          ))}
        </div>
        <p>© Untitled. Images: Unsplash Design: HTML5 UP.</p>
      </div>
    </FooterStyled>
  );
};
export default Footer;
