//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const NewPracticeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>
                Create a New Practice
            </Text>
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

//make this component available to the app
export default NewPracticeScreen;
