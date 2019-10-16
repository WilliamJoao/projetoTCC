import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../services/navigation';

import {
    Wrapper,
    Container,
    BackContainer,
    BasketContainer,
    ItemCount,
    InputText,
} from './styles';

export default function Header({ navigation, page = false }) {
    const cartSize = useSelector(state => state.cart.length);

    function handleBackContainer() {
        if (page) NavigationService.navigate(page);

        NavigationService.goBack();
    }

    function handleBasketContainer() {
        NavigationService.navigate('Cart');
    }

    return (
        <Wrapper>
            <Container>
                <BackContainer onPress={handleBackContainer}>
                    <Icon name="keyboard-backspace" color="#555" size={40} />
                </BackContainer>
                <InputText
                    icon="search"
                    autoCorrect={false}
                    // autoCapitalize="none"
                    placeholder="O que deseja Buscar ?"
                />
                <BasketContainer onPress={handleBasketContainer}>
                    <Icon name="shopping-cart" color="#555" size={40} />
                    <ItemCount>{cartSize || 0}</ItemCount>
                </BasketContainer>
            </Container>
        </Wrapper>
    );
}
