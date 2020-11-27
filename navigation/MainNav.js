//import libraries
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

import ProfileScreen from '../screens/user/ProfileScreen';
import PracticeIndexScreen from '../screens/practices/PracticeIndexScreen';
import NewPracticeScreen from '../screens/practices/NewPracticeScreen';
import PracticeShowScreen from '../screens/practices/PracticeShowScreen';
import CustomHeaderButton from '../components/CustomHeaderButton';
import NewsFeedScreen from '../screens/user/NewsFeedScreen';

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
    },
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
    Feed: {
        screen: NewsFeedScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-people'
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
        headerTitle: navData.navigation.getParam('practiceTitle'),
        headerRight: () => 
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='FAV'
                    iconName={'ios-cog'}
                    onPress={() => {}}
                />
        </HeaderButtons>
    }
};

const PracticeSettings = createDrawerNavigator({
    thingOne: {
        screen: NewPracticeScreen,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    thingTwo: PracticeIndexScreen  
}, {
    contentOptions: {
        activeTintColor: Colors.highlight,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

//make this component available to the app
export default createAppContainer(BottomTabNav);
