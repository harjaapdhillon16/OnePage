import React from 'react';
import styled from 'styled-components';

import IndividualItem from './IndividualItem';

import { theme } from '../utils/theme';

const Section = styled.section`
  .is-5 {
    line-height: 2rem;
  }
  border: 0px solid ${theme.borderColor};
  border-bottom-width: 1px;
`;

const Data = [
  {
    title: 'One',
    bottomBorder: true,
    sideBorder: false,
    icon: 'far fa-gem',
  },
  {
    title: 'Two',
    bottomBorder: true,
    sideBorder: true,
    icon: 'fas fa-save',
  },
  {
    title: 'Three',
    bottomBorder: true,
    sideBorder: false,
    icon: 'fas fa-chart-bar',
  },
  {
    title: 'Four',
    bottomBorder: true,
    sideBorder: false,
    icon: 'fas fa-wifi',
  },
  {
    title: 'Five',
    bottomBorder: true,
    sideBorder: true,
    icon: 'fas fa-cog',
  },
  {
    title: 'Six',
    bottomBorder: true,
    sideBorder: false,
    icon: 'fas fa-paper-plane',
  },
  {
    title: 'Seven',
    bottomBorder: true,
    sideBorder: false,
    icon: 'fas fa-desktop',
  },
  {
    title: 'Eight',
    bottomBorder: true,
    sideBorder: true,
    icon: 'fas fa-sync',
  },
  {
    title: 'Nine',
    bottomBorder: true,
    sideBorder: false,
    icon: 'fas fa-hashtag',
  },

  {
    title: 'Ten',
    bottomBorder: false,
    sideBorder: false,
    icon: 'fas fa-bolt',
  },
  {
    title: 'Eleven',
    bottomBorder: false,
    sideBorder: true,
    icon: 'fas fa-envelope',
  },
  {
    title: 'Twelve',
    bottomBorder: false,
    sideBorder: false,
    icon: 'fas fa-leaf',
  },
];

const Items = () => {
  return (
    <Section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-10">
            <h1 className="subtitle is-2 has-text-weight-light has-text-black">
              Items
            </h1>
            <h1 className="subtitle is-5 has-text-weight-normal has-text-black">
              This is an Items element, and it&#39;s basically just a grid for
              organizing items of various types. You can customize its style and
              size, as well as assign it an optional{' '}
              <span className="code">onload</span> or{' '}
              <span className="code">onscroll</span> transition modifier
              (details).
            </h1>
            {/* map for the IndividualItem in the item container */}
            <div className="columns is-multiline is-centered is-gapless">
              {Data.map(data => (
                <div className="column is-4">
                  <IndividualItem
                    title={data.title}
                    sideBorder={data.sideBorder}
                    bottomBorder={data.bottomBorder}
                    icon={data.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Items;
