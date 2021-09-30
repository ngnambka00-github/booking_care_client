import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers, postNewUser, deleteUserById, updateUserData } from '../../services/UserService';
import './UserManager.scss';
import ModalCreateUser from './ModalCreateUser';
import ModalEditUser from './ModalEditUser';
import { toast } from 'react-toastify';
import { emitter } from '../../utils/emitter';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayUsers: [],
            isOpenCreateUserModal: false,
            isOpenEditUserModal: false,
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errorCode == 0) {
            this.setState({
                arrayUsers: response.users
            })
        }
    }

    // Click button add new user
    handlerAddNewUser = () => {
        this.setState({
            isOpenCreateUserModal: true
        });
    }

    // hàm truyền xuống hàm còn createUserModal
    toggleCreateUserModal = () => {
        this.setState({
            isOpenCreateUserModal: !this.state.isOpenCreateUserModal,
        });
    }

    // hàm truyền xuống hàm còn editUserModal
    toggleEditUserModal = (userData) => {
        this.setState({
            isOpenEditUserModal: !this.state.isOpenEditUserModal
        });
    }

    // hàm truyền sang component con để createNewUser
    createNewUser = async (newUser) => {
        try {
            let response = await postNewUser(newUser);
            if (response && response.errorCode === 0) {
                // Update lại giao diện danh sách
                await this.getAllUsersFromReact();

                // Close modal
                this.setState({
                    isOpenCreateUserModal: false
                });

                // emit event emitter to child component to clear state
                emitter.emit("DATA_CLEAR_MODAL_USER"); // có thể truyền thêm data

                // hiển thị thông báo thêm thành công
                toast.success("Add new user success");
            } else {
                toast.error(`Error: ${response.errorMessage}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Hàm truyền sang modal con để thực hiện chức năng update
    editUserData = async (user) => {
        try {
            let response = await updateUserData(user);
            if (response && response.errorCode === 0) {
                // Update lại danh sách user 
                await this.getAllUsersFromReact();

                this.setState({
                    isOpenEditUserModal: false
                });

                toast.success(`Update user ${user.email} done !`);
            } else {
                toast.error(`Error: ${response.errorMessage} !`);
            }
        } catch (error) {
            console.error(error);
        }
    }


    // Sự kiện click vào button delete user
    handlerDeleteUserButton = async (user) => {
        try {
            let response = await deleteUserById(user.id);
            if (response && response.errorCode === 0) {
                // Cập nhập list user  
                await this.getAllUsersFromReact();

                // Hiển thị thông báo
                toast.success(`Delete user ${user.email} success`);
            }
            else {
                toast.error(`Error delete user ${user.email}: ${response.errorMessage}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    handlerOpenUserEditModal = (user) => {
        this.setState({
            isOpenEditUserModal: true
        });
        this.refToModeEditUser.uploadDataToForm(user);
    }

    render() {
        let { arrayUsers } = this.state;
        return (
            <div className="user-container">
                <ModalCreateUser
                    isOpen={this.state.isOpenCreateUserModal}
                    toggleFromParent={this.toggleCreateUserModal}
                    createNewUser={this.createNewUser}
                />

                <ModalEditUser
                    isOpen={this.state.isOpenEditUserModal}
                    toggleFromParent={this.toggleEditUserModal}
                    editUserData={this.editUserData}
                    onRef={ref => (this.refToModeEditUser = ref)}
                />

                <div className="title text-center h2 text-primary mt-4">Manager users</div>

                <div className="user-table container mt-2">
                    <div className="row">
                        <div className="col-4 mb-2">
                            <button className="btn btn-primary px-4"
                                onClick={(event) => this.handlerAddNewUser()}>
                                <i className="fas fa-plus mx-2"></i>
                                <span>Add New Users</span>
                            </button>
                        </div>
                    </div>
                    <table className="table table-hover">
                        <thead className="bg-success text-white">
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrayUsers.length > 0 &&
                                arrayUsers.map((item, index) => {
                                    return (
                                        <tr className="align-middle" key={item.id}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button
                                                    className="btn-edit btn-action"
                                                    onClick={(event) => this.handlerOpenUserEditModal(item)}
                                                >
                                                    <i className="fas fa-pencil-alt"></i>
                                                </button>

                                                <button
                                                    className="btn-delete btn-action"
                                                    onClick={(event) => this.handlerDeleteUserButton(item)}>
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
