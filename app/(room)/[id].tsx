import RoomHeader from '@/components/RoomHeader';
import Message from '@/components/Message';
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { View,Text, FlatList, TextInput, Pressable, ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useStore } from '@/store/messages';

const User = () => {
  const { addMessage: storeAddMessage } = useStore(()=>({addMessage: (message: string) => {}}));
  const {id,name} = useLocalSearchParams();
  const [sender, setsender] = useState(true);
  const [msg, setmsg] = useState("");
  const [message, setmessage] = useState<{ message: string; time: string; sender: boolean; }[]>([])
  // let messages = [
  //   {
  //     message: "Hello",
  //     time: "23:23",
  //     sender: true,
  //   },
  //   {
  //     message: "Hi",
  //     time: "23:23",
  //     sender: false,
  //   },
  //   {
  //     message: "Hello",
  //     time: "23:23",
  //     sender: true,
  //   },
  //   {
  //     message: "Hi",
  //     time: "23:23",
  //     sender: false,
  //   },
  //   {
  //     message: "Hello",
  //     time: "23:23",
  //     sender: true,
  //   },
  //   {
  //     message: "Hi",
  //     time: "23:23",
  //     sender: false,
  //   },
  //   {
  //     message: "Hello",
  //     time: "23:23",
  //     sender: true,
  //   },
  //   {
  //     message: "Hi",
  //     time: "23:23",
  //     sender: false,
  //   },
  function addMessage() {
    if (msg === "") return;
    setmessage([...message, {
      message: msg,
      time: "23:23",
      sender: true,
    }]);
    setmsg("");
    
  }
  return (
    <View className='flex-1' >
      <ImageBackground  source={{ uri: 'https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} style={{width: '100%', height: '100%'}}>
      <Stack.Screen options={{
       headerTitle: () => <RoomHeader name={`${name}`} />,
       headerStyle: {
      backgroundColor: '#007ef2',
      },
     }}/>
     <FlatList showsVerticalScrollIndicator={false} data={message} renderItem={({ item: msg, index }) => (
        <View key={index} className={`flex m-3`}>
          <Message message={msg.message} time={msg.time} sender={msg.sender} />
        </View>
      )}
    />
    <View className="absolute pr-1 pl-1 bottom-3 flex flex-row items-center justify-center bg-transparent w-full">
      <TextInput onChangeText={(text) => setmsg(text)} value={msg} textAlignVertical="center" className="bg-white rounded-full border border-gray-900 max-h-16 min-h-16 w-[80%] m-1 text-2xl focus:border-green-500 font-medium font-mono p-4  self-center " placeholder="Message" />
      <Pressable onPress={addMessage} className=" items-center justify-center shadow bg-green-500 p-3 h-[60px] w-[60px] rounded-full">
        
        <Ionicons name="send" size={25} color="white" />
      </Pressable>
    </View>
    </ImageBackground>
  </View>
  )
}

export default User
