import { ActionType } from '../../../models/reduxType';
import * as ProductActionsType from '../../actions/types/product';

//Get list product
export const ListProduct = (
    state = { loading: false, data: null, errMess: null },
    action: ActionType,
) => {
    switch (action.type) {
        case ProductActionsType.PENDING_GET_LIST_PRODUCT:
            return { ...state, loading: true, data: null, errMess: null };
        case ProductActionsType.GET_LIST_PRODUCT_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errMess: null,
            };
        case ProductActionsType.GET_LIST_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                errMess: action.payload,
            };
        case ProductActionsType.RESET_LIST_PRODUCT: {
            return { ...state, loading: false, data: null, errMess: null };
        }
        default:
            return state;
    }
};
