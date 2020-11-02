//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import TimerComp from '../../components/TimerComp';

// create a component
const PracticeShowScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.stopWatchContainer}>
                <TimerComp time={Date.now()} />
            </View>
            <View style={styles.calendarContainer}>
                <CalendarList  
                      markingType={'custom'}
                      markedDates={{
                        '2020-11-28': {
                          customStyles: {
                            container: {
                              backgroundColor: 'green'
                            },
                            text: {
                              color: 'black',
                              fontWeight: 'bold'
                            }
                          }
                        },
                        '2020-12-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
                        '2020-12-22': {color: '#70d7c7', textColor: 'white'},
                        '2020-12-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                        '2020-12-24': {color: '#70d7c7', textColor: 'white'},
                        '2020-12-25': {endingDay: true, color: '#50cebb', textColor: 'white'},
                      }}
                />
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
