import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Reducers
import { LoginAccount } from '../reducers/auth';

const loginConfig = {
    key: 'loginAccount',
    storage: AsyncStorage,
    blacklist: ['errMess'],
};

const rootReducer = combineReducers({
    loginAccount: persistReducer(loginConfig, LoginAccount),
});

export const ConfigureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));
    const persistor = persistStore(store);
    return { persistor, store };
};
