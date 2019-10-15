import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';
import colors from '../../styles/colors';
import Header from '../../components/Header';

import {
    Background,
    Container,
    Products,
    Product,
    ProductInfo,
    ProductImage,
    ProductDetails,
    ProductTitle,
    ProductPrice,
    ProductDelete,
    ProductControls,
    ProductControlButton,
    ProductAmount,
    ProductSubtotal,
    TotalContainer,
    TotalText,
    TotalAmount,
    Order,
    OrderText,
    EmptyContainer,
    EmptyText,
} from './styles';

export default function Cart({ navigation }) {
    const products = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: product.price * product.amount,
        }))
    );

    const totalPrice = useSelector(state =>
        state.cart.reduce(
            (total, product) => total + product.price * product.amount,
            0
        )
    );

    const dispatch = useDispatch();

    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }

    function increment(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }

    function renderProduct({ item }) {
        return (
            <Products>
                <Product key={item.id}>
                    <ProductInfo>
                        <ProductImage source={{ uri: item.image }} />
                        <ProductDetails>
                            <ProductTitle>{item.title}</ProductTitle>
                            <ProductPrice>{item.price}</ProductPrice>
                        </ProductDetails>
                        <ProductDelete
                            onPress={() =>
                                dispatch(CartActions.removeFromCart(item.id))
                            }
                        >
                            <Icon
                                name="delete-forever"
                                size={30}
                                color={colors.primary}
                            />
                        </ProductDelete>
                    </ProductInfo>
                    <ProductControls>
                        <ProductControlButton onPress={() => decrement(item)}>
                            <Icon
                                name="remove-circle-outline"
                                size={25}
                                color={colors.primary}
                            />
                        </ProductControlButton>
                        <ProductAmount value={String(item.amount)} />
                        <ProductControlButton onPress={() => increment(item)}>
                            <Icon
                                name="add-circle-outline"
                                size={25}
                                color={colors.primary}
                            />
                        </ProductControlButton>
                        <ProductSubtotal>{item.subtotal}</ProductSubtotal>
                    </ProductControls>
                </Product>
            </Products>
        );
    }

    return (
        <Background>
            <Header page="Home" />
            <Container>
                {products.length ? (
                    <>
                        <FlatList
                            vertical
                            data={products}
                            // extraData={amount}
                            keyExtractor={item => String(item.id)}
                            renderItem={renderProduct}
                        />
                        <TotalContainer>
                            <TotalText>TOTAL</TotalText>
                            <TotalAmount>{totalPrice}</TotalAmount>
                            <Order>
                                <OrderText>FINALIZAR PEDIDO</OrderText>
                            </Order>
                        </TotalContainer>
                    </>
                ) : (
                    <EmptyContainer>
                        <Icon
                            name="remove-shopping-cart"
                            size={64}
                            color="#eee"
                        />
                        <EmptyText>Seu carrinho está vazio.</EmptyText>
                    </EmptyContainer>
                )}
            </Container>
        </Background>
    );
}

Cart.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
