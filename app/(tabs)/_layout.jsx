import { Tabs } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function Tablayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'#E8820E'
      }}
    >
      <Tabs.Screen name="home" 
      options={{
        title: ' Home',
        headerShown: false,
        tabBarIcon:({color})=><Entypo name="home" size={24} color={color} />
      }}/>
      <Tabs.Screen name="favourite"
      options={{
        title: ' Favourite',
        headerShown: false,
        tabBarIcon:({color})=><MaterialIcons name="favorite" size={24} color={color} />
      }} />
      <Tabs.Screen name="inbox" 
      options={{
        title: 'Inbox',
        headerShown: false,
        tabBarIcon:({color})=><FontAwesome name="inbox" size={24} color={color} />
      }}/>
      <Tabs.Screen name="profile" 
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon:({color})=><MaterialCommunityIcons name="face-man-profile" size={24} color={color} />
      }}/>
    </Tabs>
  );
}
