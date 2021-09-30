import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import './ModalUser.scss';

class ModalCreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: 1,
            roleId: 1,
            missingField: '',
            isShowPassword: false,
        }

        // bắt sự kiện event emitter
        this.listenToEventEmitter();
    }

    // bắt sự kiện event emitter
    listenToEventEmitter = () => {
        emitter.on("DATA_CLEAR_MODAL_USER", (data) => {
            this.refreshState();
        });
    }

    componentDidMount() {

    }

    refreshState = () => {
        this.setState({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: 1,
            roleId: 1,
            missingField: ''
        });
    }

    toggle = () => {
        this.props.toggleFromParent();
        this.refreshState();
    }

    // Thay đổi dữ liệu dạng cục bộ cho tất cả các cột
    handlerOnChangeInput = (event, key) => {
        let copyState = { ...this.state };
        copyState[key] = event.target.value;
        this.setState({
            ...copyState
        });
    }

    // Check valid input 
    checkValidateInput = () => {
        let arrCheck = ["email", "password", "firstName", "lastName", "address", "phoneNumber"];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                return { check: false, missingField: arrCheck[i] };
            }
        }
        return { check: true, missingField: '' };
    }


    // Sự kiện khi click vào button save change
    handlerAddNewUser = async () => {
        this.setState({
            missingField: ''
        });

        let objCheck = this.checkValidateInput();
        if (objCheck.check) {
            // Truyền dữ liệu ngược lại sang cho component cha
            await this.props.createNewUser(this.state);
        } else {
            this.setState({
                missingField: objCheck.missingField
            })
        }
    }

    handlerShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        let { isShowPassword } = this.state;
        return (
            // toggle -> đóng mở cửa sổ
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                size={"lg"}
                centered={true}
                className={"modal-user-container"}
            >
                <ModalHeader className="bg-primary text-white">Create a new user</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {this.state.missingField.length !== 0 &&
                                    <span className="text-danger h5">Missing required parameter: {this.state.missingField}</span>
                                }
                            </div>
                            <div className="col-6 form-group mt-2">
                                <label>Email</label>
                                <input type={"text"}
                                    className="form-control"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={(event) => this.handlerOnChangeInput(event, "email")} />
                            </div>

                            <div className="col-6 form-group mt-2">
                                <label>Password</label>
                                <div className="custom-input-password">
                                    <input type={isShowPassword ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={(event) => this.handlerOnChangeInput(event, "password")} />
                                    <span onClick={(event) => this.handlerShowHidePassword()}>
                                        <i className={isShowPassword ? "fas fa-eye-slash icon-eye" : "fas fa-eye icon-eye"}></i>
                                    </span>
                                </div>
                            </div>

                            <div className="col-6 form-group mt-2">
                                <label>First Name</label>
                                <input type={"text"}
                                    className="form-control"
                                    placeholder="Firstname"
                                    value={this.state.firstName}
                                    onChange={(event) => this.handlerOnChangeInput(event, "firstName")} />
                            </div>

                            <div className="col-6 form-group mt-2">
                                <label>Last Name</label>
                                <input type={"text"}
                                    className="form-control"
                                    placeholder="Lastname"
                                    value={this.state.lastName}
                                    onChange={(event) => this.handlerOnChangeInput(event, "lastName")} />
                            </div>

                            <div className="col-12 form-group mt-2">
                                <label>Address</label>
                                <input type={"text"}
                                    className="form-control"
                                    placeholder="Address"
                                    value={this.state.address}
                                    onChange={(event) => this.handlerOnChangeInput(event, "address")} />
                            </div>

                            <div className="col-4 form-group mt-2">
                                <label>Phone Number</label>
                                <input type={"text"}
                                    className="form-control"
                                    placeholder="Phone number"
                                    value={this.state.phoneNumber}
                                    onChange={(event) => this.handlerOnChangeInput(event, "phoneNumber")} />
                            </div>

                            <div className="col-4 form-group mt-2">
                                <label>Gender</label>
                                <select class="form-control"
                                    onChange={(event) => this.handlerOnChangeInput(event, "gender")}>
                                    <option selected value="1">Male</option>
                                    <option value="0">Female</option>
                                </select>
                            </div>

                            <div className="col-4 form-group mt-2">
                                <label>Role</label>
                                <select class="form-control"
                                    onChange={(event) => this.handlerOnChangeInput(event, "roleId")}>
                                    <option selected value="1">Admin</option>
                                    <option value="2">Doctor</option>
                                    <option value="3">Patient</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.handlerAddNewUser()}>Add new</Button>
                    <Button color="secondary" onClick={() => this.toggle()}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateUser);