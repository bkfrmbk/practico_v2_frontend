//import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from 'expo-font';

// create a component
const PracticeCard = (props) => {
    let TouchableComp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.version >= 21) {
        TouchableComp = TouchableNativeFeedback
    }

    const calcPercentOfGoal = (goal, currentPeriodDuration) => {
        return Math.round(goal / currentPeriodDuration * 100)
    }
    return (
        <View style={styles.card}>
            <TouchableComp onPress={props.onSelect}>
            <View>
                <Text>{props.title}</Text>
                <Text>Goal: {props.goal} hours per {props.timeType}</Text>
                <Text>{calcPercentOfGoal(props.goal, props.currentPeriodDuration)}% of goal reached</Text>
            </View>
            </TouchableComp>
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    card: {
        width: '80%',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0, height: 2
        },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 100,
        margin: 20,
        padding: 20
    }
});

//make this component available to the app
export default PracticeCard;
