import React, { useState, Component } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, AsyncStorage, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Header from './Header'

const test = {username:'test', password:'123'}

export default class Login extends Component{
    state={
        username:'',
        password:''
    }
    static navigationOptions = {
        header: null
    }
    
    render(){
        return( 
            <Modal visible={this.props.showLogin} animationType='slide'>
                <Header />
                <StatusBar backgroundColor='#1e90ff' barStyle='light-content'/>
                <View style={styles.login}>
                    <TextInput style={styles.input} placeholder="Enter Username"
                    autoCapitalize={"none"}
                    value={this.state.username} onChangeText={(username)=> this.setState({username})}/>

                    <TextInput style={styles.input} placeholder="Enter Password" autoCapitalize={"none"} 
                    value={this.state.password} secureTextEntry={true} onChangeText={(password)=> this.setState({password})}/>

                    <View style={styles.button}>
                        <Button title='Cancel' color='red' onPress={this.props.cancelLogin}/>
                        <Button title='Submit' onPress={this.signin}/>
                    </View>
                </View>
            </Modal>
        );
    }
    signin = async() => {
        if(test.username === this.state.username && test.password === this.state.password){
            alert('Logged In');
        }else{
            alert('Username or password are incorrect!')
        }
    }
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