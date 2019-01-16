import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {Modal, Button, Form, Input, Icon} from 'antd';
import { actionCreators as loginAction } from '../pages/login/store/index'
import { actionCreators as headerAction } from "./header/store/index";

const FormItem = Form.Item;

class LoginDialog extends PureComponent{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                this.props.login(values.account, values.password);
                this.props.handleCloseLoginDialog();
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { loginDialog, handleCancelLoginDialog, handleOpenLoginDialog } = this.props;

        return (
            <div>
                <Modal
                    title="账号 登录"
                    visible={ loginDialog }
                    onOk={ handleOpenLoginDialog }
                    onCancel={ handleCancelLoginDialog }
                >

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem
                            label="用户名"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {
                                getFieldDecorator('account', {
                                    rules: [{ required: true, message: '请输入你的用户名!' }],
                                })(
                                    <Input
                                        prefix={
                                            <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                                        }
                                        placeholder="手机 / 用户名"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label="密码"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入你的账号' }],
                                })(
                                    <Input
                                        prefix={
                                            <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                        }
                                        placeholder="密码"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const mapState = (state) => ({
    loginDialog: state.get('header').get('loginDialog')
});

const mapDispatch = (dispatch) => {
    return {
        handleCancelLoginDialog() {
            dispatch(headerAction.changeLoginDialog())
        },
        handleOpenLoginDialog() {
            dispatch(headerAction.changeLoginDialog())
        },
        login(accountElem, passwordElem) {
            dispatch(loginAction.login(accountElem, passwordElem))
        },
        handleCloseLoginDialog() {
            dispatch(headerAction.changeLoginDialog())
        }
    }
};

export default connect(mapState, mapDispatch)(Form.create()(LoginDialog))
