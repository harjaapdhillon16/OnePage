/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  button {
    border-radius: 100px;
  }
`;
const TableData = [
  {
    description: 'Ante turpis integer aliquet porttitor.',
    price: '29.99',
  },
  {
    description: 'Vis ac commodo adipiscing arcu aliquet.',
    price: '19.99',
  },
  {
    description: 'Morbi faucibus arcu accumsan lorem.',
    price: '29.99',
  },
  {
    description: 'Vitae integer tempus condimentum.',
    price: '19.99',
  },
  {
    description: 'Ante turpis integer aliquet porttitor.',
    price: '19.99',
  },
];

const Table = () => {
  return (
    <Container className="columns has-text-left borderBottom">
      <div className="column is-4">
        <h1 className="subtitle is-4 has-text-weight-light has-text-black">
          Table
        </h1>
      </div>
      <div className="column is-8">
        <div className="columns is-multiline">
          <div className="column is-12">
            <h1 className="title is-4 has-text-weight-light">Default</h1>

            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>{' '}
              <tfoot>
                <tr>
                  <th />
                  <th />
                  <th>$100</th>
                </tr>
              </tfoot>
              {TableData.map((data, i) => {
                let color = theme.backgroundColor;
                if ((i + 1) % 2 === 1 || i === 0) {
                  color = theme.codeColor;
                }
                return (
                  <tbody style={{ backgroundColor: color }}>
                    <tr>
                      <th>Item {i + 1}</th>
                      <td>{data.description}</td>
                      <td>{data.price}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="column is-12">
            <h1 className="title is-4 has-text-weight-light">Alternate</h1>
            <table className="table is-fullwidth is-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>{' '}
              <tfoot>
                <tr>
                  <th />
                  <th />
                  <th>$100</th>
                </tr>
              </tfoot>
              {TableData.map((data, i) => {
                let color = theme.backgroundColor;
                if ((i + 1) % 2 === 1 || i === 0) {
                  color = theme.codeColor;
                }
                return (
                  <tbody style={{ backgroundColor: color }}>
                    <tr>
                      <th>Item {i + 1}</th>
                      <td>{data.description}</td>
                      <td>{data.price}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Table;
