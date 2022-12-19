import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

//components
import ProductItem from './components/ProductItem';

//typpes
import { RootStackParams } from '../../models/route';
import { useDispatch, useSelector } from 'react-redux';
import { listProductSelector } from '../../redux/selectors/productSelector';
import { getListProduct } from '../../redux/actions/creators/product';
import { authSelector } from '../../redux/selectors/authSelector';
import { BottomSheet, ListItem } from 'react-native-elements';

type Params = {
    strFromDate: string;
    strToDate: string;
    status: number;
    name: string;
};

export default function ProductScreen() {
    //State
    const [params, setParams] = React.useState<Params>();

    const [isVisible, setIsVisible] = React.useState(false);

    //Redux State
    const { account } = useSelector(authSelector);
    const { loading, data: productList } = useSelector(listProductSelector);

    //Redux hooks
    const dispatch = useDispatch();

    //Get list product
    React.useEffect(() => {
        dispatch(getListProduct(account.id_token, params));
    }, [params]);

    const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

    return (
        <React.Fragment>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <ScrollView>
                    {productList?.map((product: any) => (
                        <ProductItem key={product?.id} product={product} />
                    ))}
                </ScrollView>
            )}
        </React.Fragment>
    );
}
