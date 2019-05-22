import React, { Component } from 'react';
import { Layout, Button } from 'antd';

const { Footer } = Layout;

export default class Footnote extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        Galler<strong>easy</strong> ©2019 Created by
        <Button type="link" href="https://github.com/sabriele" size="small">
          @sabriele
        </Button>
      </Footer>
    );
  }
}
