import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

// import Notification from '../../components/Notification';
import {
    Container,
    Product,
    ProductImage,
    ProductTitle,
    ProductPrice,
    AddButton,
    ProductAmount,
    ProductAmountText,
    AddButtonText,
    Background,
} from './styles';

export default function Home({ navigation }) {
    const [products, setProducts] = useState([]);

    const amount = useSelector(state =>
        state.cart.reduce((amount, product) => {
            amount[product.id] = product.amount;
            return amount;
        }, {})
    );

    const dispatch = useDispatch();

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: product.price,
            }));

            setProducts(data);
        }

        getProducts();
    }, []);

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    function renderProduct({ item }) {
        return (
            <Product key={item.id}>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.price}</ProductPrice>
                <AddButton onPress={() => handleAddProduct(item.id)}>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#FFF" size={20} />
                        <ProductAmountText>
                            {amount[item.id] || 0}
                        </ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
            </Product>
        );
    }

    return (
        <Background>
            <Header page="Home" />
            <Container>
                <FlatList
                    horizontal
                    data={products}
                    extraData={amount}
                    keyExtractor={item => String(item.id)}
                    renderItem={renderProduct}
                />
            </Container>
        </Background>
    );
}

Home.navigationOptions = {
    tabBarLabel: 'Produtos',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="event" size={20} color={tintColor} />
    ),
};

Home.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
