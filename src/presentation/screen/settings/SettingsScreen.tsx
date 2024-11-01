import React, { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native';
import { styles } from '../../../config/app-theme';
import useCounterStore from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {

  const counter = useCounterStore( state => state.count );
  const incrementBy = useCounterStore( state => state.incrementby )

  const navigate = useNavigation();

  useEffect(() => {
    navigate.setOptions({
      title: `Count: ${ counter }`
    })
  }, [])

  return (
    <View style={ styles.container } >
      <Text style={ styles.title } >Settings Screen</Text>
      <Text style={ styles.title} >{counter}</Text>

      <Pressable
        onPress={ () => incrementBy(1)  }
        style={ styles.primaryButton } >
        <Text>Increment</Text>
      </Pressable>

      <Pressable
        onPress={ () => incrementBy(-1) }
        style={ styles.primaryButton } >
        <Text>Decrement</Text>
      </Pressable>

    </View>
  )
}

export default SettingsScreen
