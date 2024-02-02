import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FeedScreen from '../FeedScreen';
import ArticleScreen from '../ArticleScreen';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const LandingScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown:false
  });

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FeedScreen" component={FeedScreen} />
      <Drawer.Screen name="ArticleScreen" component={ArticleScreen} />
    </Drawer.Navigator>
  )
}

export default LandingScreen

const styles = StyleSheet.create({})