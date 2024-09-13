import { View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useUser } from '@clerk/clerk-expo';
import Shared from './../Shared/Shared';

export default function MarkFav({ pet , color='red'}) {
    const { user } = useUser();
    const [favList, setFavList] = useState([]);

    useEffect(() => {
        if (user) {
            GetFav();
        }
    }, [user]);

    const GetFav = async () => {
        const result = await Shared.GetFavList(user);
        setFavList(result?.favourites || []);
    };

    const AddToFav = async () => {
        const favResult = [...favList, pet?.id];
        await Shared.UpdateFav(user, favResult);
        GetFav();
    };
     const removeFromFav=async()=>{
      const favResult = [...favList.filter(item=>item!=pet.id)];
      await Shared.UpdateFav(user, favResult);
      GetFav();
     }



    return (
        <View>
            {favList.includes(pet?.id) ? (
                <Pressable onPress={removeFromFav}>
                    <AntDesign name="heart" size={24} color="red" />
                </Pressable>
            ) : (
                <Pressable onPress={AddToFav}>
                    <AntDesign name="hearto" size={24} color="red" />
                </Pressable>
            )}
        </View>
    );
}
