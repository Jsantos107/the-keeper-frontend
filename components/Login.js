import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

export default function Login (props ){
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const usernameInputHandler = (enteredText) =>{
        console.log(enteredText)
    }

    const passwordInputHandler = (enteredText) =>{
        console.log(enteredText)
    }
    return( 
        <Modal visible={props.visible} animationType='slide'>
            <View >
                <TextInput placeholder="Enter Username" 
                onChangeText={usernameInputHandler}
                value={username}/>

                <TextInput placeholder="Enter Password" 
                onChangeText={passwordInputHandler}
                value={password}/>

                <View style={styles.button}>
                    <Button title='Cancel' color='red' onPress={props.cancelGoal}/>
                    <Button title='Submit' onPress={goalHandler}/>
                </View>
            </View>
        </Modal>
    );
const styles = StyleSheet.create({
   
})