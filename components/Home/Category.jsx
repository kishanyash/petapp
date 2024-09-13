import { View, Text, FlatList, Image, Touchable, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import { StyleSheet } from 'react-native';

export default function Category({Category}) {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory,setSelectedCategory]=useState('DOGS');
  useEffect(() => {
    GetCategories();
  }, []);

  const GetCategories = async () => {
    setCategoryList([]);
    const snapshot = await getDocs(collection(db, 'Category'));
    const categories = [];
    snapshot.forEach((doc) => {
      categories.push(doc.data()); // Add each category data to the array
    });
    setCategoryList(categories); // Update state with the full array
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{
        fontFamily: "Outfit-Bold",
        fontSize: 20, 
        
      }}>
        Category
      </Text>

      <FlatList
        data={categoryList}
        numColumns={4}
        
        renderItem={({ item,index }) => (
            <TouchableOpacity onPress={()=>{

            setSelectedCategory(item.name);
          
            Category(item.name)}}

         
             style={{flex:1}}>

          <View style={ [styles.container,
            selectedCategory==item.name&&styles.selectedCategoryContainer
          ]}>
            <Image
              source={{ uri: item?.imageUrl }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20, 
              }}
            />
          </View>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'Outfit-Medium',
            textTransform: 'uppercase',

          }}>
            {item?.name}
          </Text>
          </TouchableOpacity>
        
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
     container:{
        padding:13,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        margin: 5,
        borderColor: '#E8820E',
        backgroundColor:'#fff1c9'

     }, 
     selectedCategoryContainer:{
   backgroundColor: '#4FAAFF',
   borderColor: '#fff1c9'
     }
})