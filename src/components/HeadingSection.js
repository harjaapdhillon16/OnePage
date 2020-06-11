import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  justify-content: flex-end;
`;
const Size = [
  {
    fontSizeClass: 'title is-1',
  },
  {
    fontSizeClass: 'title is-3',
  },
  {
    fontSizeClass: 'title is-4',
  },
];

const HeadingSection = () => {
  return (
    <Container className="columns is-multiline">
      <div className="column is-4 has-text-left">
        <h2 className="subtitle is-3">Text</h2>
      </div>
      <div className="column is-8 has-text-left borderBottom">
        <h1 className="title is-1 has-text-weight-light">Heading Level 1</h1>
        <h1 className="title is-2 has-text-weight-light">Heading Level 2</h1>
        <h1 className="title is-3 has-text-weight-light">Heading Level 3</h1>
        <h1 className="title is-4 has-text-weight-light">Heading Level 4</h1>
        <h1 className="title is-5 has-text-weight-light">Heading Level 5</h1>
        <h1 className="title is-6 has-text-weight-light">Heading Level 6</h1>
      </div>
      {Size.map(data => (
        <div className="column is-8 has-text-left borderBottom">
          <h1 className={`${data.fontSizeClass} has-text-weight-light`}>
            Heading with a Subtitle
          </h1>
          <h1 className="title is-4 italic has-text-grey has-text-weight-light">
            Lorem ipsum dolor sit amet nullam id egestas urna aliquam
          </h1>
          <h1 className="title is-6 has-text-weight-light">
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </h1>
        </div>
      ))}
    </Container>
  );
};
export default HeadingSection;
