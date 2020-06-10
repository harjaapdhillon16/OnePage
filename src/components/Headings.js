import React from 'react';
import styled from 'styled-components';

import HeadingWithImageBanner from './HeadingWithImageBanner';
import HeadingWithImageSpotLight from './HeadingWithImageSpotLight';

import { theme } from '../utils/theme';

const Container = styled.div`
  width: 100%;
  text-align: left;
  img {
    object-fit: cover;
    padding: 0px;
  }
  .is-1 {
    font-size: 5rem;
  }
  .is-6 {
    font-size: 1.1rem;
  }
  .subtitle {
    padding-top: 20px;
    color: ${theme.textColorLite};
    line-height: 2rem;
    font-weight: lighter;
  }
  button {
    box-shadow: none !important;
    border-radius: 100px;
  
  }
  .underline {
    text-decoration: underline;
  }
`;

const Data = [
  {
    reverse: true,
    image: 'camera',
    title: 'Spotlight',
    subtitle1:
      "This is a Spotlight element, and it's generally used – as its name implies – to spotlight a particular feature, subject, or pretty much whatever. You can customize its style, scheme, color, orientation, content alignment, and image position, as well as assign it an optional onload or onscroll transition modifier (details).",
  },

  {
    reverse: false,
    image: 'fox',
    title: 'Spotlight',
    subtitle1:
      "This is a Spotlight element, and it's generally used – as its name implies – to spotlight a particular feature, subject, or pretty much whatever. You can customize its style, scheme, color, orientation, content alignment, and image position, as well as assign it an optional onload or onscroll transition modifier (details).",
  },
  {
    reverse: true,
    image: 'city',
    title: 'Spotlight',
    subtitle1:
      "This is a Spotlight element, and it's generally used – as its name implies – to spotlight a particular feature, subject, or pretty much whatever. You can customize its style, scheme, color, orientation, content alignment, and image position, as well as assign it an optional onload or onscroll transition modifier (details).",
  },
];

const Heading = () => {
  return (
    <Container className="columns is-multiline is-gapless">
      <div className="column is-12">
        <HeadingWithImageBanner />
      </div>
      {Data.map(data => (
        <div className="column is-12">
          <HeadingWithImageSpotLight
            reverse={data.reverse}
            image={data.image}
            title={data.title}
            subtitle1={data.subtitle1}
          />
        </div>
      ))}
    </Container>
  );
};
export default Heading;
