import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Room() {
  return (
    <Stack
     screenOptions={{
       headerStyle: {
      backgroundColor: '#3cb371',
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
      fontWeight: 'bold',
       },
     }}>
     {/* Optionally configure static options outside the route.*/}
    
     {/* <Stack.Screen name="[id]" options={{
       headerTitle: ,
       headerStyle: {
            backgroundColor: '#007ef2',
        },
     }}/> */}

      </Stack>
  )
}