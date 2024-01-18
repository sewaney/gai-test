import { Form, Input, Button, Checkbox } from "antd";

const LOGIN_URL = "https://dummyjson.com/auth/login";

export default function LoginForm() {
  const onFinish = (values) => {
    fetch(LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.message) {
          window.alert("Invalid Credentials");
        } else {
          if (response.username === "kminchelle")
            window.location.href =
              window.location.origin + "/dashboardIndividual";
          if (response.username === "hbingley1")
            window.location.href =
              window.location.origin + "/dashboardCorporate";
        }
      });
  };

  return (
    <Form
      wrapperCol={{ span: 14 }}
      layout='horizontal'
      style={{ maxWidth: 500, marginTop: "15%", marginLeft: "40%" }}
      className='login'
      onFinish={onFinish}
    >
      <Form.Item
        name='username'
        rules={[
          {
            required: true,
            maxLength: 50,
            message: "Please enter username",
          },
        ]}
      >
        <Input placeholder='Username' />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            maxLength: 50,
            message: "Please enter password",
          },
        ]}
      >
        <Input type='password' placeholder='Password' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}
