import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const AuthStackNavigator = createStackNavigator(
    {
        Welcome: {
            screen: WelcomeScreen,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        SignIn: {
            screen: SignInScreen,
            navigationOptions: ({ navigation }) => ({
                headerTransparent: true,
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <View style={ {paddingHorizontal: 10 }}>
                            <Icon name="md-arrow-back" size={26} />
                        </View>
                    </TouchableOpacity>
                )
            })
        },
        SignUp: {
            screen: SignUpScreen,
            navigationOptions: ({ navigation }) => ({
                headerTransparent: true,
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <View style={ {paddingHorizontal: 10 }}>
                            <Icon name="md-arrow-back" size={26} />
                        </View>
                    </TouchableOpacity>
                )
            })
        }
    },
    {
        initialRouteName: 'Welcome'
    }
);

const AppTabNavigator = createBottomTabNavigator(
    {
        HomeScreen: HomeScreen,
        SettingsScreen: SettingsScreen
    }
);

const AppStackNavigator = createStackNavigator(
    {
        AppTabNavigator: {
            screen: AppTabNavigator,
            navigationOptions: ({ navigation }) => ({
                title: 'Navigation App',
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <View style={ {paddingHorizontal: 10 }}>
                            <Icon name="md-menu" size={24} />
                        </View>
                    </TouchableOpacity>
                )
            })
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: AppStackNavigator
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStackNavigator,
        App: AppDrawerNavigator
    },
    {
        initialRouteName: 'AuthLoading'
    }
));
