
import React from 'react';
import { connect } from 'dva';
import { Input, Col, Select, InputNumber, DatePicker } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;

function Example({ about }) {

  console.log( about );

  return (
    <div>
      <InputGroup size="large">
        <Col span="4">
          <Input defaultValue="0571" />
        </Col>
        <Col span="8">
          <Input defaultValue="26888888" />
        </Col>
      </InputGroup>
      <br />
      <InputGroup compact>
        <Input style={{ width: '20%' }} defaultValue="0571" />
        <Input style={{ width: '30%' }} defaultValue="26888888" />
      </InputGroup>
      <br />
      <InputGroup compact>
        <Select defaultValue="Zhejiang">
          <Option value="Zhejiang">Zhejiang</Option>
          <Option value="Jiangsu">Jiangsu</Option>
        </Select>
        <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
      </InputGroup>
      <br />
      <InputGroup compact>
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
          <Option value="Option2">Option2</Option>
        </Select>
        <Input style={{ width: '50%' }} defaultValue="input content" />
        <InputNumber />
      </InputGroup>
      <br />
      <InputGroup compact>
        <Input style={{ width: '50%' }} defaultValue="input content" />
        <DatePicker />
      </InputGroup>
      <br />
      <InputGroup compact>
        <Select defaultValue="Option1-1">
          <Option value="Option1-1">Option1-1</Option>
          <Option value="Option1-2">Option1-2</Option>
        </Select>
        <Select defaultValue="Option2-2">
          <Option value="Option2-1">Option2-1</Option>
          <Option value="Option2-2">Option2-2</Option>
        </Select>
      </InputGroup>
      <br />
    </div>
  );
}

function mapStateToPorps({ about }) {
  return { about };
}

export default connect( mapStateToPorps )( Example );
