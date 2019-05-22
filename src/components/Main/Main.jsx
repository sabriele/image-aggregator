import React, { Component } from 'react';
import { Layout } from 'antd';
import axios from 'axios';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';

const apiKey = process.env.REACT_APP_API_KEY;
const url = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=8`;

export default class Main extends Component {
  state = {
    images: [],
  };
  componentDidMount() {
    axios
      .get(url)
      .then(response => response.data.data)
      .then(images => this.setState({ images }));
  }
  render() {
    return (
      this.state.images.length > 0 && (
        <Layout style={{ minHeight: '100vh' }}>
          `${console.log(this.state.images)}`
          <Navbar />
          <Search images={this.state.images} />
          <Footer />
        </Layout>
      )
    );
  }
}
