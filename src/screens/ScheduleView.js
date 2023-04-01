import { View, Text, SafeAreaView, StatusBar, Image, Alert, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import {
    AppBar, HStack, Button, Avatar, Dropdown, Pressable, Backdrop,
    BackdropSubheader, Divider, FAB, Switch
} from "@react-native-material/core";
import BottomBar from '../components/BottomBar';


const HomeView = () => {


    //Čia turi buti gaunama info iš fire base apie kalendoriu
    const lecture = [
        {
            name: 'Kompiuteriu architektura',
            lecture: 2,
            hall: 'SRL-24A4',
            group: 1,
        },
        {
            name: 'Operacinės sistemos',
            lecture: 3,
            hall: 'SRL-24A4',
            group: 0,
        },
        {
            name: 'Lietuvių kalba',
            lecture: 6,
            hall: 'SRL-24A4',
            group: 1,
        }
    ]

    const weekDays = [
        {
            weekDay: 'Monday',
            lectures: lecture
        },
        {
            weekDay: 'Tuesday',
            lectures: lecture
        },
        {
            weekDay: 'Wenesday',
            lectures: lecture
        },
        {
            weekDay: 'Thursday',
            lectures: lecture
        },
        {
            weekDay: 'Friday',
            lectures: lecture
        },
    ]

    //Reikia pagal tvarkarašti nustatyti kuri sav bus atvaizduojama 
    const currentWeek = 1

    // weekDays[0].lectures = lecture
    // weekDays[1].lectures = lecture

    var scheduleHeader = []
    scheduleHeader.push(
        <View style={styles.calendarItem}>

            <View style={[styles.calendarColumn, { flex: 1 }]}>
                <Text style={styles.calendarText}>No.</Text>
            </View>

            <View style={[styles.calendarColumn, { flex: 4 }]}>
                <Text style={styles.calendarText}>Lecture</Text>
            </View>

            <View style={[styles.calendarColumn, { flex: 3 }]}>
                <Text style={styles.calendarText}>Room</Text>
            </View>

            <View style={[styles.calendarColumn, { flex: 1 }]}>
                <Text style={styles.calendarText}>SG</Text>
            </View>
        </View>
    )

    var calendarViews = []

    // weekDays.forEach(weekDay=> 
    //     )

    for (let i = 0; i < weekDays.length; i++) {
        var lectures = weekDays[i].lectures;

        var lecturesView = [];

        for (let i = 0; i < lectures.length; i++) {

            var rowBackground = {
                backgroundColor: '#dde2e7`'
            }

            if (i % 2 == 0) {
                rowBackground.backgroundColor = '#D3D4D5'
            }

            lecturesView.push(
                <View style={[styles.calendarItem, rowBackground]}>

                    <View style={[styles.calendarColumn, { flex: 1 }]}>
                        <Text style={styles.calendarText}>{lectures[i].lecture}</Text>
                    </View>

                    <View style={[styles.calendarColumn, { flex: 4 }]}>
                        <Text style={styles.calendarText}>{lectures[i].name}</Text>
                    </View>

                    <View style={[styles.calendarColumn, { flex: 3 }]}>
                        <Text style={styles.calendarText}>{lectures[i].hall}</Text>
                    </View>

                    <View style={[styles.calendarColumn, { flex: 1 }]}>
                        <Text style={styles.calendarText}>{lectures[i].group}</Text>
                    </View>
                </View>
            )
        }

        calendarViews.push(
            <View key={i} style={styles.calendarElement}>
                <Text style={[{ fontWeight: '700', fontSize: 25, }]}>{weekDays[i].weekDay}</Text>
                {scheduleHeader}
                {lecturesView}
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}>

                <View style={styles.weekStyle}>
                    <View style={styles.stuff}>
                        <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>Week {currentWeek}</Text>
                    </View>
                </View>

                <ScrollView  >
                    <View style={styles.calendarContainer}>
                        {calendarViews}
                    </View>
                </ScrollView>
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
        marginBottom: 8,
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
    },
    calendarItem: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    calendarColumn: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
        //width: ''
    }
});

export default HomeView