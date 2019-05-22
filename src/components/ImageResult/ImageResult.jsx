import React from 'react';
import './ImageResult.css';
import { Card } from 'antd';

export default function ImageResult() {
  return (
    <Card
      hoverable
      cover={
        <img
          alt="results"
          src="https://via.placeholder.com/256?text=Sample+Image"
          style={{ maxHeight: '256px', objectFit: 'cover' }}
        />
      }
    />
  );
}
