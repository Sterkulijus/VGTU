import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import {
    AppBar, HStack, Button, Avatar, Dropdown, Pressable, Backdrop,
    BackdropSubheader, Divider, FAB, Switch
} from "@react-native-material/core";
import BottomBar from '../components/BottomBar';


const HomeView = () => {

    //Čia turi buti gaunama info iš fire base apie kalendoriu

    // const lectures = [
    //     {
    //         name: 'Kompiuteriu architektura',
    //         lecture: 2,
    //         hall: 'SRL-24A4',
    //         group: 1,
    //     },
    //     {
    //         name: 'Lietuviu kalba',
    //         lecture: 3,
    //         hall: 'SRL-24A4',
    //         group: 0,
    //     }
    // ]

    // const weekDay = [
    //     {
    //         weekDay: 'Monday',
    //         lectures: []
    //     },
    //     {
    //         weekDay: 'Tuesday',
    //         lectures: []
    //     },
    // ]

    // weekDay[0] = lectures
    // weekDay[1] = lectures

    // var calendarView = []

    // for (let i = 0; i < weekDay.length; i++) {

    //     // for(let i = 0; i < weekDay[i].lectures.length; i++)
    //     // {

    //     // }

    //     //Čia duomenis taip perparsinti ko reikia


    //     calendarView.push(
    //         <View key={i} style={styles.calendarElement}>
    //             <Text style={[{ fontWeight: '700', fontSize: 25, }]}>{calendar[i].weekDay}</Text>

    //             <View>
                    
    //             </View>


    //         </View>
    //     )
    //}

    return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}>
                <SafeAreaView  >

                    <View style={styles.weekStyle}>
                        <View style={styles.stuff}>
                            <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>Week 1</Text>
                        </View>
                    </View>

                    <View style={styles.calendarContainer}>
                        {/* {calendarView} */}
                    </View>
                </SafeAreaView>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#dde2e7',
        flex: 1,
        height: '100%'
    },
    calendarElement: {

        padding: 15
        // borderWidth: 1,
        // marginBottom: 10,
        // marginLeft: 15,
        // marginRight: 15,
    },
    weekContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25,
        width: 150,
        alignSelf: 'center'
    },
    weekStyle: {
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stuff: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        width: '30%',
        backgroundColor: '#7E7B80'
    }
});

export default HomeView