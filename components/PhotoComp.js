//import libraries
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { DynamicCollage, StaticCollage } from 'react-native-images-collage';

// create a component
const PhotoComp = (props) => {
    const photos = 
        // [
        //     { uri: 'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg' }, 
        //     { uri: 'https://www.fillmurray.com/640/360' }
        // ]
        [
            require('../assets/icon.png'),
            require('../assets/icon.png'),
        ]
    return (
        <View>
            {/* <Image 
                source={{uri: 'https://www.fillmurray.com/640/360'}} 
                style={styles.image}  
            /> */}
            <Text>Hello</Text>
            <StaticCollage
                width={Dimensions.width}
                height={200}
                images={ photos }
                matrix= { [ 1, 1 ] }
            />
        </View>
        //
    )
};

// define your styles
const styles = StyleSheet.create({
    image: {
        width: '25%',
        height: 300
    },
});

//make this component available to the app
export default PhotoComp;
