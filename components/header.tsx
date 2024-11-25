import React from 'react'
import { View,Image,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
            <View style={{flexDirection:'row'}}>
              <Ionicons name="chatbubbles-sharp" size={30} color="white" />
              <Text style={{color:'white',
              fontSize:20,
              fontWeight:'bold',
              marginLeft:10,
              }}>Heloa</Text>
            </View>    
  )
}

export default Header
