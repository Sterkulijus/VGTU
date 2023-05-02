import React, {useState, useEffect} from 'react';
//import {Text} from 'react-native'; galimai dar prireiks netrinkit
import { View, Text, ScrollView, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import BottomBar from '../components/BottomBar';
import { collection } from "../firebase/database.js";

const Schedule = () => {

    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
         
    const weekNumber = Math.ceil(days / 7);
    const isEven = weekNumber % 2 === 0 ? true : false;

    console.log(isEven); 
    
    const getTable = async() => {
        const querySnapshot = await getDocs(collection(db, "Schedule"));
        querySnapshot.forEach((doc) => {
        console.log(doc.id,doc.data());
    });
    }

    useEffect(() => {
        getTable();   
    }, []);

    //grazina kuri savaite: pirma ar antra
    if( isEven == true ){
        return(
            <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}><Text>{`Week 2`}</Text></View>
            <BottomBar></BottomBar>
            </View>
        );
    }
    else{
        return(
            <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}><Text>{`Week 1`}</Text></View>
            <BottomBar></BottomBar>
            </View>
        );
    }



    /*(return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}><Text>{`Current week is even? ${isEven}`}</Text></View>
            <BottomBar></BottomBar>
        </View>
    )   
    */
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
        alignItems: 'center',
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
    nextWeek: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: '20%'
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

export default Schedule