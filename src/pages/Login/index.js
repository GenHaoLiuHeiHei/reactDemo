import React from 'react';
import { connect } from 'react-redux';
import Ajax from './../../axios/index';
import {Row, Col, Form, Icon, Input, Button, Checkbox, Tabs, message } from 'antd';
import { loginContent } from './../../redux/action';
import './index.less';
const { TabPane } = Tabs;
class Login extends React.Component {
    loginClick = (data,type) => {
        // if(type===1){
        //     alert("密码登录")
        //     // 解构拿参数
        // }else if(type===2){
        //     alert('短信登录')
        // }
        Ajax.postAjax('/common/login', data).then((res) => {
            message.success('登录成功');
            const { dispatch } = this.props;
            localStorage.setItem('isLogged', '1')
            dispatch(loginContent(localStorage.getItem('isLogged')));
        }).catch((res) => {
            message.error(res.data.msg || '加载失败');
        })
    };
    render () {
        return(
           <div className="LoginContent">
                <Row>
                    <Col xs={{ span: 8, offset: 10 }} lg={{ span: 4, offset: 16 }} className="login-form">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="密码登录" key="1">
                                <LoginFromOnes loginClick={this.loginClick}></LoginFromOnes>
                            </TabPane>
                            <TabPane tab="短信登录" key="2">
                                <LoginFromTwos></LoginFromTwos>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        )
    }
}
class LoginFromOne extends React.Component {

    loginClick = () => {
        this.props.form.validateFields((err, values) => {
            console.log(err);
            if (!err) {
                console.log("表单信息", values);
                this.props.loginClick(values,1);
            }
        })
    };

    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="LoginFormTop">
                <Form>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: '请输入密码' },
                                {pattern: new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/, "g"), message: '请输入6-16位正确的密码'}
                            ],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="请输入密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox className="m-b05">记住手机号</Checkbox>)}
                        <Button type="primary" onClick={this.loginClick} className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

}
class LoginFromTwo extends React.Component {

    loginClick = () => {
        this.props.form.validateFields((err, values) => {
            console.log(err);
            if (!err) {
                console.log("表单信息", values);
                this.props.loginClick(values,2)
            }
        })
    };

    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="LoginFormTop">
                <Form>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入验证码' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="请输入验证码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox className="m-b05">记住手机号</Checkbox>)}
                        <Button type="primary" onClick={this.loginClick} className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

}
const LoginFromOnes = Form.create()(LoginFromOne);
const LoginFromTwos = Form.create()(LoginFromTwo);
export default connect()(Login)
