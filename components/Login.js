import React, { useState, Component } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, AsyncStorage } from 'react-native'

const test = {username:'test', password:'123'}
export default function Login (props){
    const userURL = `http://localhost:3000/users`
    const loginURL = `http://localhost:3000/login`
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [userInfo, setuserInfo] = useState('')

    const usernameInputHandler = (enteredText) =>{
        setusername(enteredText)
    }

    const passwordInputHandler = (enteredText) =>{
        setpassword(enteredText)
    }

    const signin = async () => {
        if(test.username === username && test.password === password){
            alert("Logged in")
            await AsyncStorage.setItem('logged', true)
        }else{
            alert("Username or password are incorrect!")
        }
    };
    
    return( 
        <Modal visible={props.showLogin} animationType='slide'>
            <View style={styles.login}>
                <TextInput style={styles.input} placeholder="Enter Username" 
                onChangeText={usernameInputHandler}
                value={username}/>

                <TextInput style={styles.input} placeholder="Enter Password" 
                onChangeText={passwordInputHandler}
                value={password} secureTextEntry={true}/>

                <View style={styles.button}>
                    <Button title='Cancel' color='red' onPress={props.cancelLogin}/>
                    <Button title='Submit' onPress={()=> signin()}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    button:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
        width: '75%',
    },
    input:{
        borderColor:'black', 
        borderWidth: 1, 
        padding:10, 
        width:'80%',
        marginBottom: 10
      },
    login:{
        flex: 1,
        justifyContent:'center', 
        alignItems:'center'
      }
 });