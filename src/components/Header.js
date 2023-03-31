import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { HStack, Button, Avatar, Dropdown, Pressable, Backdrop, BackdropSubheader, AppBar } from "@react-native-material/core";
import Logo from '../../assets/images/VT_Logo.png';



const Header = () => {
    const [revealed, setRevealed] = useState(false);

    return (

        // <AppBar color='#0b4dc7'
        //     //title="TECH"
        //     leading={props => (
        //         <Text>Shrink image and change the color to white</Text>
        //         // <Image source={Logo} style={styles.logo} resizeMode="contain" />
        //     )}
        //     trailing={props => (
        //         <HStack>
        //             <Avatar style={styles.avatarStyle} color='#D3D3D3' label="Eividas Balciunas" size={40} />
        //         </HStack>
        //     )}
        // />
        <Backdrop revealed={revealed} header={
                <AppBar
                    title="Screen title"
                    transparent
                    leading={props => (
                        <Button title="Sign In"  onPress={() => setRevealed(prevState => !prevState)}/>
                        // <IconButton
                        //     icon={props => (
                        //         <Icon name={revealed ? "close" : "menu"} {...props} />
                        //     )}
                        //     onPress={() => setRevealed(prevState => !prevState)}
                        //     {...props}
                        // />
                    )}
                />
            } backLayer={
                <View style={{ height: 160 }}>
                    <Text>asdasd</Text>
                </View>
         }>


            <BackdropSubheader title="Subheader" />
            <Text>asdadsad</Text>
        </Backdrop>

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