import React from "react";
import { DatePicker, Form, Input, InputNumber, Button } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function BasicDetails(props) {
  function onFinish() {
    window.alert("Data Saved Successfully");
    props.onChange("2");
  }
  return (
    <>
      <Form
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        layout='horizontal'
        validateTrigger='onSubmit'
        style={{ maxWidth: 500 }}
      >
        <Form.Item
          name='name'
          rules={[
            {
              required: true,
              message: "Name is required",
            },
          ]}
        >
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item
          name='Mobile Number'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              maxLength: 10,
              message: "Mobile Number is required",
            },
            {
              pattern: /^\d{10}$/,
              message: "Please enter a valid Mobile Number",
            },
          ]}
        >
          <Input placeholder=' Mobile Number' />
        </Form.Item>
        <Form.Item
          name='email'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Email ID is required",
            },
            {
              pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]*$/,
              message: "Please enter a valid Email ID",
            },
          ]}
        >
          <Input placeholder='Email ID' />
        </Form.Item>
        <Form.Item>
          <DatePicker
            minDate={moment().subtract(18, "years")}
            placeholder='Birthdate'
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
