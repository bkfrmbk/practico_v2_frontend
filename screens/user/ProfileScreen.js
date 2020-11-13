//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Accessory, Card } from 'react-native-elements';

// create a component
const ProfileScreen = (props) => {
    return (
        <View style={styles.container}>
            <Card>
                <Avatar
                    size='xlarge'
                    rounded
                    source={{
                    uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                }}
                >
                    <Accessory />
                </Avatar>
            </Card>
            <Text>
                The Profile Screen
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
export default ProfileScreen;
