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
import { ListProduct } from '../reducers/product';

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
    //Authenticate
    loginAccount: persistReducer(loginConfig, LoginAccount),

    //Theme
    theme: persistReducer(themeConfig, Theme),

    //Manage customer
    customerList: CustomerList,
    customerInfomation: CustomerInfomation,
    editCustomer: EditCustomer,
    addCustomer: AddCustomer,
    deleteCustomer: DeleteCustomer,

    //Manage product
    listProduct: ListProduct,
});

export const ConfigureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));
    const persistor = persistStore(store);
    return { persistor, store };
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
