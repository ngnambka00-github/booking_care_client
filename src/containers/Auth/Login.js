import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/UserService';
import { toast } from 'react-toastify';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errorMessage: '',
        }
    }

    handlerChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handlerChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    showError = (errorMessage) => {
        toast.error(errorMessage);
        this.setState({
            errorMessage: errorMessage
        });
    }

    handleLogin = async () => {
        // Trước khi thực hiện chức năng login cần reset lại errorMessage
        this.setState({ errorMessage: '' });

        let { username, password } = this.state;
        try {
            let data = await handleLoginApi(username, password);
            if (data && data.errorCode !== 0) {
                this.showError(data.errorMessage);
            } else if (data && data.errorCode === 0) {
                // Thực hiện công việc khi login thành công
                this.props.userLoginSuccess(data.user);
                console.log("Todo login thành công");
            }
        } catch (error) {
            // Nếu có lỗi thì xuất ra thông báo lỗi
            if (error && error.response && error.response.data) {
                this.showError(error.response.data.errorMessage);
            }
        }
    }

    handlerShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        let { isShowPassword, username, password } = this.state;
        // Định nghĩa của JSX -> Có thể kết hợp thêm các cú pháp của Javascript
        return (
            <div className="login-background">
                <div className="login-container p-4">
                    <div className="login-content row">
                        <div className="col-12 login-text">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(event) => this.handlerChangeUsername(event)} />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className="custom-input-password">
                                <input type={isShowPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(event) => this.handlerChangePassword(event)} />
                                <span onClick={(event) => this.handlerShowHidePassword()}>
                                    <i className={isShowPassword ? "fas fa-eye-slash icon-eye" : "fas fa-eye icon-eye"}></i>
                                </span>
                            </div>
                        </div>

                        <div className="col-12" style={{ color: 'red' }}>
                            {this.state.errorMessage ? this.state.errorMessage : ''}
                        </div>

                        <div className="col-12">
                            <button className="login-btn btn"
                                onClick={(event) => this.handleLogin()}>
                                <span>Login</span>
                            </button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3 mb-2">
                            <span className="login-text-other">Or login with:</span>
                        </div>

                        <div className="col-12 social-login text-center">
                            <i className="fab fa-facebook icon-facebook"></i>
                            <i className="fab fa-twitter-square icon-twitter"></i>
                            <i className="fab fa-google-plus icon-google"></i>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
