import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from "@react-native-material/core";
import BottomBar from '../components/BottomBar';

const LectureTimeView = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.main}>
                <View style={styles.collumn}>

                    <View style={styles.block}>
                        <Text>Lecture</Text>
                    </View>
                    <View style={[styles.block, { backgroundColor: '#D3D4D5' }]}>
                        <Text>1 Lecture</Text>
                    </View>
                    <View style={styles.block}>
                        <Text>2 Lecture</Text>
                    </View>
                    <View style={[styles.block, { backgroundColor: '#D3D4D5' }]}>
                        <Text>3 Lecture</Text>
                    </View>
                    <View style={styles.block}>
                        <Text>Lunch break</Text>
                    </View>
                    <View style={[styles.block, { backgroundColor: '#D3D4D5' }]}>
                        <Text>4 Lecture</Text>
                    </View>
                    <View style={styles.block}>
                        <Text>5 Lecture</Text>
                    </View>
                    <View style={[styles.block, { backgroundColor: '#D3D4D5' }]}>
                        <Text>6 Lecture</Text>
                    </View>
                    <View style={styles.block}>
                        <Text>7 Lecture</Text>
                    </View>
                </View>

                <View style={styles.collumn}>
                    <View style={styles.block}>
                        <Text>Time</Text>
                    </View>
                    <View style={[styles.block, { backgroundColor: '#D3D4D5' }]}>
                        <Text>8.30 - 10.05</Text>
                    </View>
                    <View style={styles.block}>
                        <Text>10.20 - 11.55</Text>
                    </View>
                    <View style={[styles.block, { backgroundColor: '#D3D4D5' }]}>
                        <Text>12.10 - 13.45</Text>
                    </View>
                    <View style={styles.block}>
                        <Text>13.45 - 14.30</Text>
                    </View>
                    <View style={[styles.block, { backgroundColor: '#D3D4D5' }]}>
                        <Text>14.30 - 16.05</Text>
                    </View>
                    <View style={styles.block}>
                        <Text>16.20 - 17.55</Text>
                    </View>
                    <View style={[styles.block, { backgroundColor: '#D3D4D5' }]}>
                        <Text>18.10 - 19.45</Text>
                    </View>
                    <View style={styles.block}>
                        <Text>19.55 - 21.30</Text>
                    </View>
                </View>
            </View>
            <BottomBar></BottomBar>
        </View>
    );
};

export default LectureTimeView;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#dde2e7',
        alignItems: 'center'
    },
    collumn: {
        width: '45%'
    },
    block: {
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        height: '10%',
    }
});
