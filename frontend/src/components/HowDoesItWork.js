import React from 'react';

import { Button, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Step one',
    description: 'Ant ddions, is refined by Ant UED Team',
    step: '1',
  },
  {
    title: 'Step two',
    description: 'Eeeäeäeäeäeä wewe ee',
    step: '2',
  },
  {
    title: 'Step three',
    description: 'Jasså',
    step: '3',
  },
];

function HowDoesItWork() {
  return (
    <div>
      <h2>How does it work?</h2>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.step}>
            <List.Item.Meta
              avatar={<Avatar size="default">{item.step}</Avatar>}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default HowDoesItWork;
