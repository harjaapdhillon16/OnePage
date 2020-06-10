import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Section = styled.section`
  border: 0px solid ${theme.textColorLite};
  border-bottom-width: ${props => (props.bottomBorder ? '1px' : '')};
  border-right-width: ${props => (props.sideBorder ? '1px' : '')};
  border-left-width: ${props => (props.sideBorder ? '1px' : '')};
  span {
    height: 5rem;
    width: 5rem;
    border: 1px solid ${theme.textColorLite};
    border-radius: 3rem;
    margin: 0 0 20px;
  }
`;

const IndividualItem = ({ title, bottomBorder, sideBorder, icon }) => {
  return (
    <Section
      bottomBorder={bottomBorder}
      sideBorder={sideBorder}
      className="section"
    >
      <div>
        <span className="icon is-size-3">
          <i className={icon} />
        </span>
        <h1 className="subtitle is-3 has-text-weight-light">{title}</h1>
        <h1 className="subtitle is-5 has-text-weight-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui
          turpis, cursus eget orci amet aliquam congue semper. Etiam eget
          ultrices risus nec tempor elit.
        </h1>
      </div>
    </Section>
  );
};
export default IndividualItem;
