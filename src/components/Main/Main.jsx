import React, { Component } from 'react';
import { Layout } from 'antd';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default class Main extends Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Navbar />
        <Footer />
      </Layout>
    );
  }
}
