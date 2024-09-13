import { View, Text, Image } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OwnerInfo({ pet = {} }) {

  console.log('Pet object:', pet);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        {pet?.userImage && ( 
          <Image 
            source={{ uri: pet.userImage }}
            style={styles.userImage}
          />
        )}
        <View style={styles.textContainer}> 
          <Text style={styles.username}>
            {pet?.username}
          </Text>
          <Text style={styles.petOwnerLabel}>
            Pet Owner
          </Text>
        </View>
      </View>
      <Ionicons name="send-sharp" size={24} color="#E8820E" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row', 
    borderColor:'#E8820E',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
  userImage: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 2, 
    borderRadius: 99, 
  },
  textContainer: {
    marginLeft: 10,
  },
  username: {
    fontFamily: 'Outfit-Medium',
    fontSize: 17,
  },
  petOwnerLabel: {
    fontFamily: 'Outfit', 
    color: 'gray', 
  },
});
