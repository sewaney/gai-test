import React from "react";
import { DatePicker, Form, Input, InputNumber, Button } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function AddressDetails(props) {
  function onFinish() {
    window.alert("Data Saved Successfully.");
    console.log(props);
    props.onChange("3");
  }
  return (
    <>
      <Form
        onFinish={onFinish}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        style={{ maxWidth: 500 }}
        validateTrigger='onSubmit'
      >
        <Form.Item
          name='address1'
          rules={[
            {
              required: true,
              message: "Required Field",
            },
          ]}
        >
          <Input placeholder='Address Line1' />
        </Form.Item>
        <Form.Item
          name='address2'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Required Field",
            },
          ]}
        >
          <Input placeholder='Address Line2' />
        </Form.Item>
        <Form.Item
          name='city'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Required Field",
            },
          ]}
        >
          <Input placeholder='City' />
        </Form.Item>
        <Form.Item
          name='district'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Required Field",
            },
          ]}
        >
          <Input placeholder='District' />
        </Form.Item>
        <Form.Item
          name='state'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Required Field",
            },
          ]}
        >
          <Input placeholder='State' />
        </Form.Item>
        <Form.Item
          name='PINCODE'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Please add Pin code",
            },
            {
              pattern: /^[1-9][0-9]{5}$/,
              message: "Please enter a valid Pin Code",
            },
          ]}
        >
          <Input placeholder='Pin code' />
        </Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Save
        </Button>
      </Form>
    </>
  );
}
