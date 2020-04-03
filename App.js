import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Header from './components/Header';
import Login from './components/Login';

export default function App() {
  const [showLogin, setShowLogin] = useState(false)

  const cancelLogin = () => {
    setShowLogin(false)
  }
  return (
    <View style={styles.main}>
      <Header />
      <Button style={styles.button}title="Login" onPress={()=> setShowLogin(true)}/> 
      <Login cancelLogin={cancelLogin} showLogin={showLogin}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    margin: 4,
    width: '75%',
  }
});
