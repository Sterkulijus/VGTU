import React, {useState, useEffect} from 'react';
//import {Text} from 'react-native'; galimai dar prireiks netrinkit
import { FlatList, View, Text, ScrollView, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import BottomBar from '../components/BottomBar';
import { collection } from "../firebase/database.js";
import firebase from '../firebase/database';

const Schedule = () => {

    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    const weekDay = days % 7;
    const weekNumber = Math.ceil(days / 7);
    const isEven = weekNumber % 2 === 0 ? true : false;


    console.log(isEven); 

    const [data, setData] = useState([]);

    const getTodaysTable = async() => {
        firebase.firestore().collection('Schedule').get().then(z => {
            z.forEach(test => {
                let data = test.data();
                if (data.savaitesDiena === weekDay) {
                    console.log(data);                               //sitas parodo visas paskaitas kurios bus siandiena
                    setData(documents);
                  }
                //console.log(data);
            })
        });
      };
      
      const getTable = async() => {
        firebase.firestore().collection('Schedule').get().then(z => {
            z.forEach(test => {
                let data = test.data();
                console.log(data);                                  //sitas parodo visas paskaitas kurios bus per savaite
            })
        });
      };

    //   useEffect(() => {
    //     getTable();   
    //   }, []);

    //   useEffect(() => {
    //     getTodaysTable();   
    //   }, []);

    

    const Table = ({ data }) => {
        console.log('data:', data); // Add this line to log the data
        return (
          <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={styles.row}>
  <Text style={styles.cell}>{item.Auditorija}</Text>
  <Text style={styles.cell}>{item.Dalykas}</Text>
  <Text style={styles.cell}>{item.Laikas}</Text>
</View>
                )}

                //paspaudus turi issiplesti ir rodyti :
                // <Text style={styles.cell}>{item.Destytojas}</Text>
                // <Text style={styles.cell}>{item.Tipas}</Text>
                
            keyExtractor={(item, index) => index.toString()}
          />
        );
      };
      const MyComponent = () => {
        const [data, setData] = useState([]);
        const todaysData = [];
        const getTable = async() => {
            firebase.firestore().collection('Schedule').get().then(z => {
                z.forEach(test => {
                    let data = test.data();
                    if (data.savaitesDiena === weekDay) {
                    //    console.log(data);  
                        todaysData.push(data);                                //sitas parodo visas paskaitas kurios bus sia diena
                }})
                setData(todaysData);
            });
          };
    
        useEffect(() => {
            getTable();
        }, []);
    
        return <Table data={data} />;
      };

        // const [daySchedule, setDaySchedule] = useState([]);
      
        // const getScheduleByDay = async () => {
        //   const q = query(collection(db, 'Schedule'), where('savaitesDiena', '==', 1));
        //   const querySnapshot = await getDocs(q);
        //   const schedule = [];
        //   querySnapshot.forEach((doc) => {
        //     if (doc.data().savaitesDiena === 1) {
        //       schedule.push({ id: doc.id, ...doc.data() });
        //     }
        //   });
        //   setDaySchedule(schedule);
        // };
      
        // useEffect(() => {
        //   getScheduleByDay();
        //   console.log(daySchedule);
        // }, []);


    //grazina kuri savaite: pirma ar antra
    if (isEven) {
        return (
          <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}><Text>{`Week 2`}</Text></View>
            <MyComponent />
            <BottomBar />
          </View>
        );
    }
    else{
        return(
            <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}><Text>{`Week 1`}</Text></View>
            <MyComponent />   
            <BottomBar />
            </View>
        );
    }

    
}

    /*(return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}><Text>{`Current week is even? ${isEven}`}</Text></View>
            <BottomBar></BottomBar>
        </View>
    )   
    */
    

const styles = StyleSheet.create({
     row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    overflow: 'hidden',
    fontSize: 16,
  },
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