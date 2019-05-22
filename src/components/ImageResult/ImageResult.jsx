import React, { Component } from 'react';
import './ImageResult.css';
import { Card } from 'antd';

export default class ImageResult extends Component {
  render() {
    const { imageId } = this.props;
    console.log(imageId);
    return (
      <Card
        hoverable
        style={{ marginBottom: 48 }}
        cover={
          <img
            alt={`${imageId}`}
            src={`https://media.giphy.com/media/${imageId}/giphy.gif`}
            style={{ maxWidth: '100%', height: 256, objectFit: 'cover' }}
          />
        }
      />
    );
  }
}
