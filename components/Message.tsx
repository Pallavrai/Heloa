import { View, Text } from 'react-native'
import React from 'react'

interface MessageProps {
  message: string;
  time: string;
  sender: boolean;
}
export default function Message(props: MessageProps) {
  return (
    <>
      {props.sender ? (
      <View className='rounded-3xl h-auto max-w-2/3 p-3 mr-1 bg-green-400 text-white self-end'>
        <Text className='font-medium text-xl'>{props.message}</Text>
      </View>
      ) : (
      <View className='rounded-3xl h-auto max-w-2/3 p-3 ml-1 bg-blue-500 text-white self-start'>
        <Text className='font-medium text-xl'>{props.message}</Text>
      </View>
      )}
    </>
  );
}