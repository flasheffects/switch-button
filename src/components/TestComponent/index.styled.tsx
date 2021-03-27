import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ComponentWrapper = styled.div`
  .ant-switch {
    width: 56px;
    background-color: #b5b5b5;
  }
  .ant-switch:focus {
    box-shadow: none;
  }
  .ant-switch.ant-switch-checked {
    background-color: #0f213c;
  }
  .ant-switch .ant-switch-handle::before {
    background-color: #919191;
  }
  .ant-switch.ant-switch-checked .ant-switch-handle::before {
    background-color: #01c8f8;
  }
  .ant-switch-handle::before {
    position: absolute;
    width: 32px;
    height: 32px;
    top: -7px;
    right: 0;
    bottom: 0;
    left: -6px;
    border-radius: 50px;
    box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
    transition: all 0.2s ease-in-out;
    content: '';
  }
`;
