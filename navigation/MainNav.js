//import libraries
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer,  } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import ProfileScreen from '../screens/ProfileScreen';
import PracticeIndexScreen from '../screens/PracticeIndexScreen';

import Colors from '../constants/Colors';

const BottomTabNav = createBottomTabNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-person'
                        size={25}
                        color={tabInfo.tintColor}
                    />)
            }
        }
    },
    Practices: {
        screen: PracticeIndexScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-timer'
                        size={25}
                        color={tabInfo.tintColor}
                    />)
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.lightTurq
    }
});

//make this component available to the app
export default createAppContainer(BottomTabNav);
