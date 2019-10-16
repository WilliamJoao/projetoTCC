import React, { useState } from 'react';
import { Modal, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import Header from '../../components/Header';

import {
    Background,
    Container,
    Fab,
    List,
    Title,
    SubTitle,
    ViewText,
    IconList,
    IconShowProducts,
    ViewTitle,
} from './styles';

export default function MyList() {
    // const dispatch = useDispatch();
    const [modalView, setModalView] = useState({ modalView: true });

    const products = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: product.price * product.amount,
        }))
    );

    function hendleAddList(visible) {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={setModalView(visible)}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            />
        );
    }

    return (
        <Background>
            <Header />
            <Container>
                <List>
                    <ViewText>
                        <IconList />
                        <ViewTitle>
                            <Title>William Vieira</Title>
                            <SubTitle>
                                {products.length >= 0
                                    ? `${products.length} Produtos`
                                    : '0 Produtos'}
                            </SubTitle>
                        </ViewTitle>
                    </ViewText>
                    <IconShowProducts />
                </List>
            </Container>
            <Fab
                onPress={() => {
                    hendleAddList(!modalView);
                }}
            >
                <Icon name="playlist-add" size={40} color="#eee" />
            </Fab>
        </Background>
    );
}

MyList.navigationOptions = {
    tabBarLabel: 'Minha Lista',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={20} color={tintColor} />
    ),
};
