import React, {useState, useEffect} from 'react';
//import {Text} from 'react-native'; galimai dar prireiks netrinkit
import { FlatList, View, Text, Pressable, Divider, ScrollView, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import BottomBar from '../components/BottomBar';
import ReceiverScreen from '../components/ReceiverScreen';
import { collection } from "../firebase/database.js";
import firebase from '../firebase/database';
import { useRoute } from '@react-navigation/native';
import SingInView from '../screens/ScheduleSelector';

const Schedule = () => {
    const route = useRoute();

    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    const weekDay = days % 7;
    const weekNumber = Math.ceil(days / 7);
    const isEven = weekNumber % 2 === 0 ? true : false;
    const GrouIDD = "null"; 

    console.log(isEven); 

    const [data, setData] = useState([]);

    const getTodaysTable = async() => {
        firebase.firestore().collection('Schedule').get().then(z => {
            z.forEach(test => {
                let data = test.data();
                if (data.savaitesDiena === weekDay) {
                  //  console.log(data);                               //sitas parodo visas paskaitas kurios bus siandiena
                    setData(documents);
                  }
            })
        });
      };
      
    const getTable = async() => {
        firebase.firestore().collection('Schedule').get().then(z => {
            z.forEach(test => {
                let data = test.data();
             //   console.log(data);                                  //sitas parodo visas paskaitas kurios bus per savaite
            })
        });
      };


    //   async function handleLogin() {
    //     const route = useRoute();
      
    //     const { Group } = route.params;
      
    //     return (
    //         Group
    //     );
    //   }
    //   useEffect(() => {
    //     getTable();   
    //   }, []);

    //   useEffect(() => {
    //     getTodaysTable();   
    //   }, []);
  
    
    const Table = ({ data }) => {
        //  console.log('data:', data); // Add this line to log the data
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


    // const viewSelector = () =>{
    //     return (
    //         <View style={styles.main}>
    //           <View style={styles.main}>
        
    //             <View style={styles.header}>
    //               <View style={[styles.viewSelector, {marginRight:5}]}>
    //                 <Pressable >
    //                   <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>Šios dienos</Text>
    //                 </Pressable>
    //               </View>
    //               <View style={styles.viewSelector}>
    //                 <Pressable >
    //                   <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>Visos savaitės</Text>
    //                 </Pressable>
    //               </View>
    //             </View>
    //             <Divider style={{ marginTop: 5}} />
        
    //             <View>
    //               {}
    //               <Text>aaaaaaaaaaaaaaaaa</Text>
    //             </View>
    //           </View>
    //           <BottomBar />
    //         </View>
    //       );
    // }



    const MyComponent = () => {
        const [data, setData] = useState([]);
        //const [group, setGroup] = useState(null);
        const todaysData = [];
        const route = useRoute();
        var grupe = route.params.myGroup;


        const getTable = async() => {
            firebase.firestore().collection('Schedule').get().then(z => {
                z.forEach(test => {
                    let data = test.data();
                    //console.log(grupe);
                        if (data.savaitesDiena === weekDay && data.GroupID === grupe) {    
                                todaysData.push(data);        //sitas parodo visas paskaitas kurios bus sia diena
                            }})
                            setData(todaysData);
            });
        };
                  
        useEffect(() => {
        //     gaunam({navigation, route})
            getTable();
        }, []);
    
    return <Table data={data} />;
    };



    //grazina kuri savaite: pirma ar antra
    if (isEven) {
        return (
            <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}><Text>{`Week 1`}</Text></View>
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
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    viewSelector: {
        backgroundColor: '#0b4dc7',
        borderRadius: 40,
        width: '30%',
        alignItems: 'center'
    },
});

export default Schedule