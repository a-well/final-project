import React from 'react';

import {
  Button, List, Avatar, Typography,
} from 'antd'
import { Link } from 'react-router-dom'

const Title = Typography

const data = [
  {
    title: 'Find trade',
    description: 'Or upload a listing of your own',
    step: '1',
  },
  {
    title: 'Meet up',
    description: 'Message user and meet up',
    step: '2',
  },
  {
    title: 'Yay!',
    description: 'Happy Pokedex is happy',
    step: '3',
  },
];

function HowDoesItWork() {
  return (
    <>
      <Title level={2}>How does it work?</Title>
      <List
        itemLayout="vertical"
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.step}>
            <List.Item.Meta
              style={{ alignItems: 'baseline' }}
              avatar={<Avatar size="60">{item.step}</Avatar>}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default HowDoesItWork;
