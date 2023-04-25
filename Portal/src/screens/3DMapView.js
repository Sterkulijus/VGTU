import React, { Suspense, useRef, useState } from 'react'
import { StyleSheet, SafeAreaView, } from 'react-native';
import BottomBar from '../components/BottomBar';
import MapViewHeader from '../components/MapViewHeader';
import { Canvas } from '@react-three/fiber'
//import ModelView from 'react-native-3d-model-view';


const ThreeDMapView = () => {

    // function MapRender(props) {
    //     var mesh = useRef(null);

    //     return (
    //         // <mesh ref={mesh} {...props} scale={1}>
    //         //     <boxGeometry args={[2, 2]} />
    //         //     <meshStandardMaterial color={'hotpink'} />
    //         // </mesh>
    //     )
    // }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <MapViewHeader />
            <SafeAreaView style={styles.main}>


            </SafeAreaView>
            <BottomBar></BottomBar>
        </SafeAreaView>
    );
};

export default ThreeDMapView;

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
});
