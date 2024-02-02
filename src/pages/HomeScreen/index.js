import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const pressHandler = (navigation, screen) => {
  navigation.navigate(screen);
  console.log(screen);
};

const HomeScreen = ( ) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Login" onPress={ ()=> pressHandler( navigation, "LoginScreen") }></Button>
      <Button title="Landing" onPress={()=>pressHandler(navigation, 'LandingScreen')}></Button>
      <Button title="Register" onPress={()=>pressHandler(navigation, 'RegisterScreen')}></Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})