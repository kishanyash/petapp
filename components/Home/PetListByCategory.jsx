import { View, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Category from './Category';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import PetListItem from './PetListItem';

export default function PetListByCategory() {
  const [petList, setPetList] = useState([]);
  const [loader, setLoader] = useState(false);

  const GetPetList = async (category) => {
    setLoader(true);
    setPetList([]); 
    const q = query(collection(db, 'Pets'), where('Category', '==', category));
    const querySnapshot = await getDocs(q);

    const pets = [];
    querySnapshot.forEach(doc => {
      pets.push(doc.data());
    });

    setPetList(pets); 
    setLoader(false);
  };

  useEffect(() => {
    GetPetList('DOGS');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Category Category={(value) => GetPetList(value)} />
      
      {loader ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={petList}
          style={{ marginTop: 10 }}
          horizontal={true}
          onRefresh={() => GetPetList('DOGS')}
          refreshing={false} // Set refreshing to false or handle it properly
          renderItem={({ item }) => (
            <PetListItem pet={item} />
          )}
          keyExtractor={(item, index) => index.toString()} // Ensure a unique key for each item
        />
      )}
    </View>
  );
}
