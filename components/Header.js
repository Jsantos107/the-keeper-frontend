import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}> The Keeper</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        width:'100',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title:{
        color:'black',
        fontSize: 18,
    }
});

export default Header;