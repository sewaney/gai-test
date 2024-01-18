import React from "react";
import { DatePicker, Form, Input, InputNumber, Button, Select } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function CompanyDetails(props) {
  function onFinish() {
    window.alert("Data Saved Successfully.");
    console.log(props);
    props.onChange("2");
  }

  return (
    <>
      <Form
        onFinish={onFinish}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        style={{ maxWidth: 500 }}
      >
        <Form.Item
          name='companyName'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Company Name is required",
            },
          ]}
        >
          <Input placeholder='Company Name' />
        </Form.Item>
        <Form.Item
          name='Company Number'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Company Number is required",
            },
            {
              pattern: /[0-9]/,
              message: "Please enter a valid Company Number",
            },
          ]}
        >
          <Input placeholder='Company Number' />
        </Form.Item>
        <Form.Item
          validateTrigger='onSubmit'
          name='companyTin'
          rules={[
            {
              required: true,
              message: "Company TIN is required",
            },
            {
              pattern: /^[a-zA-Z0-9]*$/,
              message: "Please enter a valid Company TIN",
            },
          ]}
        >
          <Input placeholder='Company TIN' />
        </Form.Item>
        <Form.Item
          validateTrigger='onSubmit'
          name='companyType'
          rules={[
            {
              required: true,
              message: "Company Type is required",
            },
          ]}
        >
          <Select
            style={{ width: 120 }}
            options={[
              { value: "sme", label: "SME" },
              { value: "mme", label: "MME" },
              { value: "llp", label: "LLP" },
              { value: "startup", label: "Startup" },
              { value: "private", label: "Private" },
              { value: "public", label: "Public" },
            ]}
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
