//import libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { ButtonGroup } from 'react-native-elements';

import TimerComp from '../../components/TimerComp';
import CalendarComp from '../../components/CalendarComp';
import GraphComp from '../../components/GraphComp';
import PhotoComp from '../../components/PhotoComp';

// create a component
const PracticeShowScreen = (props) => {
    const [ practiceView, setPracticeView ] = useState(2);
    const buttons = ['Calendar', 'Graphs', 'Photos']
    const selectedIndex = practiceView;

    const practiceViewOptions = [<CalendarComp />, <GraphComp />, <PhotoComp />]

    return (
        <View style={styles.container}>
            <View style={styles.stopWatchContainer}>
                <TimerComp time={Date.now()} />
            </View>
            <ButtonGroup
                onPress={(index) => setPracticeView(index) }
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 40}}
            />
            <View style={styles.calendarContainer}>
                {practiceViewOptions[selectedIndex]}
            </View>
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
    stopWatchContainer: {
        marginVertical: 25
    },  
    calendarContainer: {
        marginVertical: 25,
        alignContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
    }
});

//make this component available to the app
export default PracticeShowScreen;
