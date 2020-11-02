//import libraries
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import ProfileScreen from '../screens/user/ProfileScreen';
import PracticeIndexScreen from '../screens/practices/PracticeIndexScreen';
import NewPracticeScreen from '../screens/practices/NewPracticeScreen';
import PracticeShowScreen from '../screens/practices/PracticeShowScreen';

import Colors from '../constants/Colors';

const PracticeNav = createStackNavigator({
    Index: {
        screen: PracticeIndexScreen,
        navigationOptions: {
            headerTitle: 'Practices', 
        }
    },
    New: {
        screen: NewPracticeScreen,
        navigationOptions: {
            headerTitle: 'New Practice', 
        }
    },
    Show: {
        screen: PracticeShowScreen,
    }
})

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
        screen: PracticeNav,
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

PracticeShowScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('practiceTitle')
    }
}

//make this component available to the app
export default createAppContainer(BottomTabNav);
