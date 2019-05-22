import React, { Component } from 'react';
import { Layout } from 'antd';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';

export default class Main extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        <Search />
        <Footer />
      </Layout>
    );
  }
}
