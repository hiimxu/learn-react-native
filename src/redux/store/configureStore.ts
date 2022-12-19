import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Reducers
import { LoginAccount } from '../reducers/auth';
import { Theme } from '../reducers/theme';
import {
    CustomerInfomation,
    CustomerList,
    EditCustomer,
    AddCustomer,
    DeleteCustomer,
} from '../reducers/customer';

const loginConfig = {
    key: 'loginAccount',
    storage: AsyncStorage,
    blacklist: ['errMess'],
};

const themeConfig = {
    key: 'theme',
    storage: AsyncStorage,
    blacklist: ['errMess'],
};
const rootReducer = combineReducers({
    loginAccount: persistReducer(loginConfig, LoginAccount),
    theme: persistReducer(themeConfig, Theme),
    customerList: CustomerList,
    customerInfomation: CustomerInfomation,
    editCustomer: EditCustomer,
    addCustomer: AddCustomer,
    deleteCustomer: DeleteCustomer,
});

export const ConfigureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));
    const persistor = persistStore(store);
    return { persistor, store };
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
