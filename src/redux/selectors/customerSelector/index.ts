import { RootState } from './../../store/configureStore';

export const listCustomerSelector = (state: RootState) => state.customerList;

export const customerInfomationSelector = (state: RootState) =>
    state.customerInfomation;

export const editCustomerSelector = (state: RootState) => state.editCustomer;

export const addCustomerSelector = (state: RootState) => state.addCustomer;

export const deleteCustomerSelector = (state: RootState) =>
    state.deleteCustomer;
