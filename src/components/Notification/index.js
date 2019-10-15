import React from 'react';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { NotificationAmount } from './styles';

export default function Notification() {
    const cartSize = useSelector(state => state.cart.length);

    return (
        <>
            <Icon
                name="shopping-cart"
                size={40}
                color="#555"
                style={{ marginRight: 30 }}
            />
            <NotificationAmount>{cartSize || 0}</NotificationAmount>
        </>
    );
}
