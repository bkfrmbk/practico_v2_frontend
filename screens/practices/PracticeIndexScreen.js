//import libraries
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/PracticeCard';

// create a component
const PracticeIndexScreen = (props) => {
    const practices = useSelector(state => state.practices.currentPractices)
    return (
        <View style={styles.container}>
            <FlatList
                data={practices}
                renderItem={
                    itemData => 
                        <ProductCard 
                            title={itemData.item.title}
                            goal={itemData.item.goal}
                            timeType={itemData.item.time_type}
                            currentPeriodDuration={itemData.item.current_period_duration}
                            onSelect={() => {
                                props.navigation.navigate('Show', {
                                    practiceId: itemData.item.id,
                                    practiceTitle: itemData.item.title
                                })
                            }}
                        />
                }
            />
            <Button 
                title="New Practice"
                onPress={() =>
                    props.navigation.navigate({
                        routeName: 'New'
                    }) 
            } />
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default PracticeIndexScreen;
