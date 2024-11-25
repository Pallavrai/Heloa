import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface RoomHeaderProps {
  name: string;
}

const RoomHeader = (props: RoomHeaderProps) => {
  return (
    <View style={{flexDirection:'row'}}>
   <MaterialCommunityIcons name="face-man-profile" size={40} color="white" />
    <Text style={{color:'white',
                fontSize:20,
                fontWeight:'bold',
                marginLeft:10,
    }}>
      {props.name}</Text>
    </View>
  )
}

export default RoomHeader