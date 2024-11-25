import { Button, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const [details, setdetails] = useState({
    name: "",
    room: "",
  });
  const router=useRouter();
  return (
    <SafeAreaView>
      <View className="flex h-full w-full items-center justify-center">
        <Text className="text-5xl font-extrabold mb-10 color-orange-600"><AntDesign name="team" size={40} color="green" /> Join Chat</Text>
        <TextInput value={details.name} onChangeText={(text) => setdetails(prev => ({...prev, name: text}))} textAlignVertical="center" className="mb-5  rounded-3xl border border-gray-900 min-h-20 w-9/12 text-2xl focus:border-orange-600 font-medium font-mono p-3" placeholder="Enter your name" />
        <TextInput value={details.room} onChangeText={(text) => setdetails(prev => ({...prev, room: text}))} textAlignVertical="center" className="mb-5  rounded-3xl border border-gray-900 min-h-20 w-9/12 text-2xl focus:border-orange-600 font-medium font-mono p-3" placeholder="Room Code" />
       
        <Link href={{
        pathname: "/[id]",
        params: { id: details.room,
                  name: details.name
         }
      }} asChild>
        <Pressable className="flex items-center justify-center shadow bg-blue-500 p-3 min-h-20 w-9/12 font-bold rounded-full m-3" onPress={() => {}}>
          <Text className="text-white text-3xl font-bold text-center">Join</Text>
        </Pressable>
      </Link>

      <Link href={{
        pathname: "/create",
        params: { id: details.room,
                  name: details.name
         }
      }} asChild>
        <Pressable className="flex items-center justify-center shadow bg-green-500 p-3 min-h-20 w-9/12 font-bold rounded-full">
          <Text className="text-white text-3xl font-bold text-center">Create Room</Text>
        </Pressable>
      </Link>
      </View>
    </SafeAreaView>
  );
}
