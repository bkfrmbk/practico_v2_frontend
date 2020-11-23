//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

// create a component
const CalendarComp = (props) => {
    return (
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
    )
};

// define your styles
const styles = StyleSheet.create({
});

//make this component available to the app
export default CalendarComp;
