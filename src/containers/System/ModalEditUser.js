import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: 1,
            roleId: 1,
            missingField: '',
        }

    }

    uploadDataToForm = (userData) => {
        this.setState({
            id: userData.id,
            email: userData.email,
            password: userData.password,
            firstName: userData.firstName,
            lastName: userData.lastName,
            address: userData.address,
            phoneNumber: userData.phoneNumber,
            gender: userData.gender,
            roleId: userData.roleId,
        });
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    componentWillUnmount() {
        this.props.onRef(null);
    }

    toggle = () => {
        this.props.toggleFromParent();
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
        let arrCheck = ["firstName", "lastName", "address", "phoneNumber"];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                return { check: false, missingField: arrCheck[i] };
            }
        }
        return { check: true, missingField: '' };
    }


    // Sự kiện khi click vào button save change
    handlerSaveChange = async () => {
        this.setState({
            missingField: ''
        });

        let objCheck = this.checkValidateInput();
        if (objCheck.check) {

            // Truyền dữ liệu ngược lại sang cho component cha
            await this.props.editUserData(this.state);
        } else {
            this.setState({
                missingField: objCheck.missingField
            })
        }
    }

    render() {
        return (
            // toggle -> đóng mở cửa sổ
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                size={"lg"}
                centered={true}
                className={"modal-user-container"}
            >
                <ModalHeader className="bg-warning text-white">Update user's information</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {this.state.missingField.length !== 0 &&
                                    <span className="text-danger h5">Missing required parameter: {this.state.missingField}</span>
                                }
                            </div>
                            <div className="col-12 form-group mt-2">
                                <label>Email</label>
                                <input type={"text"}
                                    disabled
                                    className="form-control"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={(event) => this.handlerOnChangeInput(event, "email")} />
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
                                <select className="form-control"
                                    onChange={(event) => this.handlerOnChangeInput(event, "gender")} value={this.state.gender}>
                                    <option value="1">Male</option>
                                    <option value="0">Female</option>
                                </select>
                            </div>

                            <div className="col-4 form-group mt-2">
                                <label>Role</label>
                                <select className="form-control"
                                    disabled
                                    onChange={(event) => this.handlerOnChangeInput(event, "roleId")}
                                    value={this.state.roleId}
                                >
                                    <option selected value="1">Admin</option>
                                    <option value="2">Doctor</option>
                                    <option value="3">Patient</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(event) => alert("Button Change password")}>Change Password</Button>
                    <Button color="warning" onClick={() => this.handlerSaveChange()}>Save Update</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);