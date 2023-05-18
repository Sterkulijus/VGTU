import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import BottomBar from '../components/BottomBar';
import { Pressable } from '@react-native-material/core';
import DownIcon from '../../assets/icons/nextDown.png';
import UpIcon from '../../assets/icons/nextUp.png';
import ScheduleSelector from '../components/ScheduleSelector'

const lecture = [
    {
        name: 'Kompiuteriu Labarato',
        lecture: 2,
        hall: 'SRL-24A4',
        group: 1,

        time: '12:10-13:45',
        subGroup: 1,
        type: 'Paskaitos',
        lecturer: 'Doc. Antanas Smetona'
    },
    {
        name: 'Operacinės sistemos',
        lecture: 3,
        hall: 'SRL-24A4',
        group: 0,
        time: '12:10-13:45',
        subGroup: 1,
        type: 'Labaratoriniai',
        lecturer: 'Doc. Antanas Smetona'
    },
    {
        name: 'Lietuvių kalba',
        lecture: 6,
        hall: 'SRL-24A4',
        group: 1,
        time: '12:10-13:45',
        subGroup: 1,
        type: 'Paskaitos',
        lecturer: 'Doc. Antanas Smetona'
    }
]

const TodaysSchedule = () => {
    var [calendarViews, setState] = useState([]);

    var currentWeek = 1

    //Čia turi buti gaunama info iš fire base apie kalendoriu
    const weekDays = [
        {
            weekDay: 'Monday',
            lectures: lecture
        }
    ]

    const getMenuButton = (weekDays, weekDayId, lectureId) => {
        return (
            <Pressable style={styles.moreInfoButton} onPress={() => setState(loadSchedule(weekDays, weekDayId, lectureId, true))}>
                <Image source={UpIcon} style={styles.logo} />
            </Pressable>
        )
    }

    const loadSchedule = (weekDays, weekDay, lectureId, closeInfoSection) => {
        var header = GetHeader();
        var calendarViews = []

        for (let i = 0; i < weekDays.length; i++) {
            var row = [];

            for (let j = 0; j < weekDays[i].lectures.length; j++) {
                var rowBackground = {
                    backgroundColor: '#dde2e7'
                }

                if (j % 2 == 0) {
                    rowBackground.backgroundColor = '#D3D4D5'
                }

                var infoWindow = []
                var menuButton = []
                menuButton.push(
                    <Pressable style={styles.moreInfoButton} onPress={() => setState(loadSchedule(weekDays, i, j, false))} key={i}>
                        <Image source={DownIcon} style={styles.logo} />
                    </Pressable>
                )

                if (weekDay != undefined && lectureId != undefined) {
                    if (weekDay == i && lectureId == j) {
                        if (closeInfoSection == false) {
                            infoWindow.push(
                                <View style={{ borderRadius: 9, padding: 15, borderWidth: 2 }} key={i}>
                                    {/* style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }} */}
                                    <Text style={{ color: 'black' }}>Time: <Text style={{ fontWeight: 'bold' }}>{weekDays[i].lectures[j].time}</Text>
                                    </Text>

                                    <Text style={{ color: 'black' }}>Type: <Text style={{ fontWeight: 'bold' }}>{weekDays[i].lectures[j].type}</Text>
                                    </Text>

                                    <Text style={{ color: 'black' }}>SubGroup: <Text style={{ fontWeight: 'bold' }}>{weekDays[i].lectures[j].subGroup}</Text>
                                    </Text>

                                    <Text style={{ color: 'black' }}>Lecturer: <Text style={{ fontWeight: 'bold' }}>{weekDays[i].lectures[j].lecturer}</Text>
                                    </Text>

                                </View>
                            )

                            menuButton = [];
                            menuButton.push(getMenuButton(weekDays, weekDay, lectureId))
                        }
                    }
                }

                row.push(
                    <View key={j}>
                        <View style={[styles.calendarItem, rowBackground]}>
                            <View style={[styles.calendarColumn, { flex: 1 }]}>
                                <Text style={styles.calendarText}>{weekDays[i].lectures[j].lecture}</Text>
                            </View>

                            <View style={[styles.calendarColumn, { flex: 4 }]}>
                                <Text style={styles.calendarText}>{weekDays[i].lectures[j].name}</Text>
                            </View>

                            <View style={[styles.calendarColumn, { flex: 3 }]}>
                                <Text style={styles.calendarText}>{weekDays[i].lectures[j].hall}</Text>
                            </View>

                            <View style={[styles.calendarColumn, { flex: 1 }]}>
                                {menuButton}
                            </View>
                        </View>
                        {infoWindow}
                    </View>

                )
                infoWindow = [];
            }

            calendarViews.push(
                <View key={i} style={styles.calendarElement}>
                    <Text style={[{ fontWeight: '700', fontSize: 20, color: 'black', alignSelf: 'center' }]}>{weekDays[i].weekDay}, Week {currentWeek}</Text>
                    {header}
                    {row}
                </View>
            )
        }
        return calendarViews
    }

    if (calendarViews.length == 0) {
        calendarViews = loadSchedule(weekDays)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <ScheduleSelector></ScheduleSelector>
            <View style={styles.main}>
                {/* <View style={styles.weekStyle}>
                    <View style={styles.stuff}>
                        <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>Week {currentWeek}</Text>
                    </View>
                </View> */}

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

function GetHeader() {
    var scheduleHeader = []
    scheduleHeader.push(
        <View style={styles.calendarItem}>

            <View style={[styles.calendarHeader, { flex: 1 }]}>
                <Text style={styles.calendarText}>No.</Text>
            </View>

            <View style={[styles.calendarHeader, { flex: 4 }]}>
                <Text style={styles.calendarText}>Lecture</Text>
            </View>

            <View style={[styles.calendarHeader, { flex: 3 }]}>
                <Text style={styles.calendarText}>Room</Text>
            </View>

            <View style={[styles.calendarHeader, { flex: 1 }]}>
            </View>
        </View>
    )
    return scheduleHeader;
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#dde2e7',
        flex: 1,
        height: '100%'
    },
    calendarElement: {
        padding: 7
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
        flexDirection: 'row'
    },
    stuff: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        width: '30%',
        backgroundColor: '#7E7B80',
    },
    calendarItem: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    calendarColumn: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarHeader: {
        height: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarText: {
        color: 'black'
    },
    logo: {
        height: 35,
        width: '100%'
    },
    moreInfoButton: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default TodaysSchedule