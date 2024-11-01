import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../presentation/screen/home/HomeScreen';
import SettingsScreen from '../presentation/screen/settings/SettingsScreen';
import ProfileScreen from '../presentation/screen/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs