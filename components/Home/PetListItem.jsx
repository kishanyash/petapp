import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {useRouter} from 'expo-router'
import MarkFav from './../../components/MarkFav'
export default function PetListItem({ pet }) {
  const router=useRouter();
  return (
    <TouchableOpacity
    onPress={()=>router.push({
      pathname:'/pet-details',
      params:pet
    })}
    style={{
      padding: 10,
      marginRight: 15,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 3,
    }}>
      <View>
        <MarkFav pet={pet}/>
      </View>
      <Image
        source={{ uri: pet?.imageUrl }}
        style={{
          width: 150,
          height: 135,
          borderRadius: 10,
          resizeMode: 'cover', // Instead of objectFit, use resizeMode
        }}
      />
      <Text style={{
        fontFamily: 'Outfit-Medium',
        fontSize: 17,
        marginTop: 5, // Added some spacing between the image and text
      }}>
        {pet.name}
      </Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginTop: 5,
      }}>
        <Text style={{
          color: 'grey',
          fontFamily: 'Outfit-Regular',
        }}>
          {pet?.breed}
        </Text>
        <Text style={{
          fontFamily: 'Outfit',
          color: '#E8820E',
          backgroundColor: '#fff1c9',
          paddingHorizontal: 9, 
          borderRadius: 19, 
          fontSize:12,
          overflow: 'hidden', 
        }}>
          {pet.age} YRS
        </Text>
      </View>
    </TouchableOpacity>
  );
}
