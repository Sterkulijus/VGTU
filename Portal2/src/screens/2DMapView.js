import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from "@react-native-material/core";
import BottomBar from '../components/BottomBar';
import MapViewHeader from '../components/MapViewHeader';
import MapView from 'react-native-maps';

const TwoDMapView = () => {

    const getInitialState = () => {
        return {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    // const onRegionChange = (region) => {
    //     this.setState({ region });
    // }

    return (
        // <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
        //     <MapViewHeader />
        //     <View style={styles.main}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />

        //         <Text>Create a 2d map in this section</Text>

        //     </View>
        //     <BottomBar></BottomBar>
        // </View>
    );
};

export default TwoDMapView;

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
});
