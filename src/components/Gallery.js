import React from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';

const Section = styled.section`
  .is-5 {
    line-height: 2rem;
  }
  .container {
    padding-bottom: 2rem;
  }
  .section {
    padding-bottom: 1rem;
  }
`;
const Pictures = [
  { image: 'camera.jpg' },
  { image: 'city.jpg' },
  { image: 'fox.jpg' },
  { image: 'mountain.jpg' },
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-10">
            <h1 className="subtitle is-2 has-text-weight-light has-text-black">
              Gallery
            </h1>
            <h1 className="subtitle is-5 has-text-weight-normal has-text-black">
              This is a Gallery element. It can behave as a lightbox (when given
              the <span className="code">lightbox</span> class), and you can
              customize its style and size, as well as assign it an optional
              <span className="code">onload</span> or{' '}
              <span className="code">onscroll</span> transition modifier
              (details).
            </h1>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {Pictures.map(data => (
          <div>
            <img src={`images/${data.image}`} />
          </div>
        ))}
      </Slider>
    </Section>
  );
};
export default Gallery;
