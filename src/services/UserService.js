import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post(
        `/api/login`,
        { email, password }
    );
}

// userId = 'ALL' -> return all users | 
const getAllUsers = (userId) => {
    return axios.get(`/api/get-all-users?userId=${userId}`);
}


// Call API create new user 
const postNewUser = (dataUser) => {
    return axios.post('/api/create-new-user', { ...dataUser });
}

// Call API delete user by id 
const deleteUserById = (userId) => {
    return axios.delete("/api/delete-user", {
        data: {
            userId: userId
        }
    })
}


// Call API update user
const updateUserData = (userData) => {
    return axios.put("api/edit-user", { ...userData });
}

export {
    handleLoginApi,
    getAllUsers,
    postNewUser,
    deleteUserById,
    updateUserData,
}
