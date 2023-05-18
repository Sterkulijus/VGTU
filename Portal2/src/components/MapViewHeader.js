import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Pressable, Text, Divider } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';

const MapViewHeader = () => {

    const navigation = useNavigation();

    const goTo3DView = ()=> {
        navigation.navigate('3DMapView', {week: 0});
    }

    const goTo2DView = ()=> {
        navigation.navigate('TwoDMapView', {week: 0});
    }

    return (
        <View style={styles.main}>
            <View style={styles.main}>
                <View style={styles.header}>
                    <View style={[styles.mapSelector, { marginRight: 15 }]}>
                        <Pressable onPress={goTo2DView}>
                            <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>2D MAP</Text>
                        </Pressable>
                    </View>
                    <View style={styles.mapSelector}>
                        <Pressable onPress={goTo3DView}>
                            <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>3D MAP</Text>
                        </Pressable>
                    </View>
                </View>
                <Divider style={{ marginTop: 5 }} />
            </View>
        </View>
    );
};


export default MapViewHeader;


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#dde2e7',
    },
    button: {
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        // marginBottom: 5,
    },
    mapSelector: {
        backgroundColor: '#0b4dc7',
        borderRadius: 40,
        width: '30%',
        alignItems: 'center',
    },
});
