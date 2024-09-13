import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function AboutPet({ pet }) {
    const [readMore, setReadMore] = useState(false);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontFamily: 'Outfit', fontSize: 20 }}>
                About {pet?.name}
            </Text>
            <Text
                numberOfLines={readMore ? undefined : 2}
                style={{
                    fontFamily: 'Outfit-Regular',
                    fontSize: 14,
                }}
            >
                {pet.about}
            </Text>
            <TouchableOpacity
                onPress={() => setReadMore(!readMore)}
            >
                <Text style={{
                    fontFamily: 'Outfit-Medium',
                    fontSize: 14,
                    color: 'blue',
                    marginTop: 5
                }}>
                    {readMore ? 'Read Less' : 'Read More'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
