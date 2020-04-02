import React from 'react';
import { View } from 'react-native';

export default function Home(props ){
    return(
        <View>
            <Text>Welcom Back {props.user ? props.user.name : "USER!"} </Text>
        </View>
    )
}