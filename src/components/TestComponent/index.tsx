import React from 'react';
import { ComponentWrapper } from './index.styled';
import { Switch } from 'antd';

function onChange(checked: boolean) {
  console.log(`switch to ${checked}`);
}

const TestComponent: React.FC = () => {
  return (
    <ComponentWrapper>
      <Switch defaultChecked onChange={onChange} />
    </ComponentWrapper>
  );
};

export default TestComponent;
