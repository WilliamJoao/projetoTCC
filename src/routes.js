import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import NavigationService from './services/navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Location from './pages/Location';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Header from './components/Header';

export default (isSigned = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                defaultNavigationOptions: navigation => ({
                    header: <Header {...navigation} />,
                    backBehavior: NavigationService.goBack(),
                }),
                Sign: createSwitchNavigator({
                    SignIn,
                    SignUp,
                    Home,
                }),
                App: createBottomTabNavigator(
                    {
                        Home,
                        Cart,
                        Location,
                        Profile,
                    },
                    {
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: '#FFF',
                            inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                            adaptive: true,
                            style: {
                                backgroundColor: '#480050',
                            },
                            labelStyle: {
                                fontSize: 12,
                            },
                        },
                    }
                ),
            },
            {
                initialRouteName: isSigned ? 'App' : 'Sign',
            }
        )
    );
