import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { View,Text, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import * as Clipboard from 'expo-clipboard';

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10000);
}
const CreateRoom = () => {

  const copyToClipboard = async (data:string) => {
    await Clipboard.setStringAsync(data);
  };

  return (
    <View className='flex flex-row items-center justify-center h-full'>
        <Text className='text-2xl font-bold'>Room Code:</Text>
        <Pressable onPress={() => copyToClipboard(getRandomNumber().toString())}>
        <Text className='rounded-lg text-2xl font-bold bg-[#4b313748] p-2'>{getRandomNumber()}  <Entypo name="clipboard" size={24} color="#A56474" /></Text>
        </Pressable>
       
    </View>
  )
}


export default CreateRoom
