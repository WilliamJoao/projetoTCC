import React from 'react';
import PropTapys from 'prop-types';

import { useDispatch } from 'react-redux';
// import { TouchableOpacity } from 'react-native';
// import NumberFormat from 'react-number-format';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import {
    Container,
    Left,
    Avatar,
    Info,
    Description,
    Price,
    // Amount,
    ViewAdd,
    TouchableProduct,
} from './styles';

export default function Product({ data, page }) {
    const dispatch = useDispatch();

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    function increment(product) {
        console.tron.log(product.id, product.amount);
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }

    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }

    return (
        <Container>
            <Left>
                <Avatar
                    source={{
                        uri: data.image
                            ? data.image
                            : `https://api.adorable.io/avatar/50/${data.title}.png`,
                    }}
                />

                <Info>
                    <Description>{data.title}</Description>
                    <Price>{data.subtotal}</Price>
                </Info>
                <ViewAdd>
                    <TouchableProduct
                        onPress={() => {
                            handleAddProduct(data.id);
                        }}
                    >
                        <Icon name="add" size={30} color="#FFF" />
                    </TouchableProduct>
                </ViewAdd>
            </Left>
        </Container>
    );
}

Product.propTypes = {
    data: PropTapys.shape().isRequired,
};
