import React from 'react'
import { View, Text, Pressable } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profile-store';
import useCounterStore from '../../store/counter-store';

const HomeScreen = () => {

  const name = useProfileStore( state => state.name )
  const email = useProfileStore( state => state.email )
  const changeProfile = useProfileStore( state => state.changeProfile )
  const counter = useCounterStore(( state => state.count ))

  return (
    <View style={ styles.container } >
      <Text style={ styles.title } >{name}</Text>
      <Text style={ styles.title } >{email}</Text>
      <Text style={ styles.title } >Counter:  {counter}</Text>

      <Pressable
        onPress={ () => useProfileStore.setState({ name: 'Johan2' }) }
        style={ styles.primaryButton } >
        <Text>Change Name</Text>
      </Pressable>

      <Pressable
        onPress={ () => useProfileStore.setState({  email: 'johan@gmail2.com' }) }
        style={ styles.primaryButton } >
        <Text>Change Email</Text>
      </Pressable>

      <Pressable
        onPress={ () => changeProfile( 'John Doe', 'john@google.com' ) }
        style={ styles.primaryButton } >
        <Text>Volver a John Doe</Text>
      </Pressable>
    </View>

    
  )
}

export default HomeScreen
