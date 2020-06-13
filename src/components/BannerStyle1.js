import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .codeHeading {
    padding: 1rem;
    font-size: 2rem;
  }
  .subtitle {
    padding-top: 1rem;
  }
`;

const TableData = [
  {
    heading: 'fullscreen',
    details: 'Fills the height of the screen.',
  },
  {
    heading: 'orient-left',
    details: 'Shows content on the left, image on the right.',
  },
  {
    heading: 'orient-right',
    details: 'Shows content on the right, image on the left.',
  },
  {
    heading: 'content-align-left',
    details: 'Left-aligns content.',
  },
  {
    heading: 'content-align-center',
    details: 'Center-aligns content.',
  },
];

const BannerStyle = () => {
  return (
    <Container className="columns">
      <div className="column is-4" />
      <div className="column is-8 has-text-left">
        <span className="code codeHeading">banner style1</span>
        <h1 className=" subtitle is-5 has-text-weight-light ">
          A 50/50 vertical split between content and an image. Supports these
          modifiers:
        </h1>
        <table className="table is-fullwidth is-bordered   ">
          {TableData.map((data, i) => {
            return (
              <tbody>
                <tr>
                  <td className="code has-text-centered ">{data.heading}</td>
                  <td>{data.details}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </Container>
  );
};
export default BannerStyle;
