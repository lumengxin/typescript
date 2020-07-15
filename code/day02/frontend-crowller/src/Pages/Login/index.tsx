import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import qs from 'qs';
import { Redirect } from 'react-router-dom'
import './style.css';

// interface Props {
//   form: any;
// }

export default class NormalLoginForm extends Component {
  // onFinish = (e: any) => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err: any, value: any) => {
  //     if (!err) {
  //       console.log(value);
  //     }
  //   })
  // }
  state = {
    isLogin: false
  }

  onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    axios.post(
      '/api/login',
      qs.stringify({
        password: values.password
      }), 
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => {
      console.log(res)
      if (res.data?.data) {
        this.setState({ 
          isLogin: true
        })
      } else {
        message.error('登录失败')
      }
    }) 
  };

  render() {
    const {isLogin} = this.state
    return isLogin ? <Redirect to="/" /> : (
      <div className="login-page">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
  
};

// ReactDOM.render(<NormalLoginForm />, mountNode);