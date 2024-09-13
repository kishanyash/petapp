import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';
import PetListByCategory from '../../components/Home/PetListByCategory';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Home = () => {
  const renderFooter = () => (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        padding: 10,
        marginTop: 13,
        backgroundColor: '#fff1c9',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 25,
        justifyContent: 'center',
      }}
    >
      <MaterialIcons name="pets" size={24} color="#E8820E" />
      <Text
        style={{
          fontFamily: 'Outfit-Medium',
          color: '#E8820E',
        }}
      >
        Add New Pet
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header />
          <Slider />
          <PetListByCategory />
        </>
      }
      ListFooterComponent={renderFooter}
      contentContainerStyle={{ padding: 20, marginTop: 20 }}
      keyExtractor={(item, index) => (item && item.id ? item.id.toString() : index.toString())} // Safely handle key extraction
      data={[]} // Dummy data to avoid empty list warning
    />
  );
};

export default Home;
