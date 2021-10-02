import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from "./appReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

// Lưu trữ page có đang được login hay không  và lưu thông tin của người dùng
const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'userInfo']
};

// Lưu trữ language vào redux -> không bị thay đổi sau mỗi lần load lại
const appPersisConfig = {
    ...persistCommonConfig,
    key: 'app',
    whitelist: ['language']
}

export default (history) => combineReducers({
    router: connectRouter(history),
    user: persistReducer(userPersistConfig, userReducer),

    // Lưu language vào redux store để không bị thay đổi sau mỗi lần loading lại
    app: persistReducer(appPersisConfig, appReducer)
})