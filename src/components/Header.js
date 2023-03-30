import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { AppBar, HStack, Button, Avatar, Dropdown, Pressable } from "@react-native-material/core";
import Logo from '../../assets/images/VT_Logo.png';



const Header = () => {
    return (
        <AppBar color='#0b4dc7'
            //title="TECH"
            leading={props => (
                <Text>Shrink image and change the color to white</Text>
                // <Image source={Logo} style={styles.logo} resizeMode="contain" />
            )}
            trailing={props => (
                <HStack>
                    <Avatar style={styles.avatarStyle} color='#D3D3D3' label="Eividas Balciunas" size={40} />
                </HStack>
            )}
        />

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    avatarStyle: {
        marginRight: 10
    }, 
    logo: {
        width: '100%',
        height: '100%' 
    },
});

export default Header