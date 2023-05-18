import React, { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Text, Switch, Pressable } from "@react-native-material/core";
import BottomBar from '../components/BottomBar'

const AccountView = () => {
    const [checked, setChecked] = useState(false);

    //Get student names abreviations 
    var studentName = "AD"
    var easter = 0
    const countPresses = () => {
        easter = easter + 1;
        if (easter == 10) {
            Alert.alert('!!!!!!!!!!!!!!!!!!!!', 'Stop pressing meeeee', [
                {
                    text: 'Make me',
                },
                {
                    text: 'Sorry',
                },
            ]);
            easter = 0
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}>
                <View style={styles.accountContainer}>
                    <Pressable style={styles.pressableStyle} onPress={countPresses}>
                        <Text style={{ fontSize: 100, color: 'white' }}>{studentName}</Text>

                    </Pressable>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Switch value={checked} onValueChange={() => setChecked(!checked)} />
                        <Text>Dark mode</Text>
                    </View>

                    <View style={{ width: '100%', alignItems: 'center', marginTop: 60 }}>
                        <TextInput color='#0b4dc7' label="Antanas Smetona" editable={false} selectTextOnFocus={false} style={styles.input} />
                        <TextInput color='#0b4dc7' label="antanas.smetona@stud.vilniustech.com" editable={false} selectTextOnFocus={false} style={styles.input} />
                        <Text>Group: EIP-2022</Text>
                    </View>
                </View>

            </View>

            <BottomBar></BottomBar>
        </View>
    );
};

export default AccountView;


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#dde2e7',
        flex: 1,
    },
    accountContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    button: {
        width: '90%',
        backgroundColor: '#0b4dc7',
        marginTop: 10,
    },
    input: {
        width: '90%',
    },
    pressableStyle: {
        backgroundColor: '#0b4dc7',
        height: '34%',
        width: '60%',
        borderRadius: 400,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
