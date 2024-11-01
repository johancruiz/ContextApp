import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './config/app-theme'
import MyTabs from './routes/MyTabs';
import { NavigationContainer } from '@react-navigation/native'

const Main = () => {
  return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
    
    
  )
}

export default Main
