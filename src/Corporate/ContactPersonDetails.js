import React, { useState } from "react";
import { DatePicker, Form, Input, InputNumber, Button } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function ContactPersonDetails(props) {
  function onFinish() {
    window.alert("Data Submitted Successfully.");
  }
  const [btndisabled, setbtndisabled] = useState(true);
  const onValuesChange = (changedValues, allValues) => {
    if (
      allValues.contactName != undefined &&
      allValues.contactName != "" &&
      allValues.mobileNumber != undefined &&
      allValues.mobileNumber != "" &&
      allValues.email != undefined &&
      allValues.email != "" &&
      allValues.designation != undefined &&
      allValues.designation != ""
    ) {
      setbtndisabled(false);
    } else {
      setbtndisabled(true);
    }
    console.log(allValues);
  };
  return (
    <>
      <Form
        onValuesChange={onValuesChange}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        style={{ maxWidth: 500 }}
        onFinish={onFinish}
      >
        <Form.Item
          name='contactName'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Contact Name is required",
            },
          ]}
        >
          <Input placeholder='Contact Person Name' />
        </Form.Item>
        <Form.Item
          name='mobileNumber'
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
          <Input placeholder='Contact Person Mobile Number' />
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
          <Input placeholder='Contact Person Email ID' />
        </Form.Item>
        <Form.Item
          name='designation'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Designation is required",
            },
          ]}
        >
          <Input placeholder='Designation' />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            disabled={btndisabled}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
