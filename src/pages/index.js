import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Heading from '../components/Headings';
import Gallery from '../components/Gallery';
import Items from '../components/Items';
import AdditionalElements from '../components/AdditionalElements';

import { theme } from '../utils/theme';

const Container = styled.div`
  text-align: center;
  width: 100%;
  .code {
    background-color: ${theme.codeColor};
    padding: 3px;
    border-radius: 5px;
  }
  .underline {
    text-decoration: underline;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Container>
          <Heading />
          <Gallery />
          <Items />
          <AdditionalElements />
        </Container>
      </Layout>
    );
  }
}
