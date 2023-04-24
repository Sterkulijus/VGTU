import React from 'react'
import { View, StyleSheet, } from 'react-native';
import { Text, } from "@react-native-material/core";
import BottomBar from '../components/BottomBar';
import MapViewHeader from '../components/MapViewHeader';

const ThreeDMapView = () => {

    return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <MapViewHeader />
            <View style={styles.main}>

                <Text>3333333333DDDDDDDDDDDDDDDDD</Text>

            </View>
            <BottomBar></BottomBar>
        </View>
    );
};

export default ThreeDMapView;


const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    
});
