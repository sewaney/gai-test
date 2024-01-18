import React, { useState } from "react";
import { DatePicker, Form, Input, InputNumber, Button } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const PersonalDetails = (props) => {
  const [btndisabled, setbtndisabled] = useState(true);

  function onFinish() {
    window.alert("Data Submitted Successfully.");
  }
  const onValuesChange = (changedValues, allValues) => {
    if (
      allValues.panNumber != undefined &&
      allValues.panNumber != "" &&
      allValues.vehicleNumber != undefined &&
      allValues.vehicleNumber != ""
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
        onFinish={onFinish}
        onValuesChange={onValuesChange}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        style={{ maxWidth: 500 }}
      >
        <Form.Item
          validateTrigger='onSubmit'
          name='panNumber'
          rules={[
            {
              required: true,
              message: "PAN Number is required",
            },
            {
              pattern: /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
              message: "Please enter a valid PAN Number",
            },
          ]}
        >
          <Input placeholder='PAN Number' />
        </Form.Item>

        <Form.Item
          name='vehicleNumber'
          validateTrigger='onSubmit'
          rules={[
            {
              required: true,
              message: "Vehicle Number is required",
            },
            {
              pattern: /^[A-Z]{2}[0-9]{1,2}(?:[A-Z])?(?:[A-Z]*)?[0-9]{4}$/,
              message: "Please enter a valid Vehicle Number",
            },
          ]}
        >
          <Input placeholder='Vehicle Number' />
        </Form.Item>
        <Button
          type='primary'
          disabled={btndisabled}
          htmlType='submit'
          className='login-form-button'
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default () => <PersonalDetails />;
