import { Stack } from "expo-router";
import '../global.css';

import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";

export default function RootLayout() {
  return(
    <>
    <Stack
     screenOptions={{
       headerStyle: {
      backgroundColor: '#f4511e',
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
      fontWeight: 'bold',
       },
       headerTitleAlign: 'center',
     }}>
     {/* Optionally configure static options outside the route.*/}
     <Stack.Screen name="index" options={{
       headerTitle: props => <Header />,
       
     }} />
     <Stack.Screen name="create" options={{
        headerTitle: 'Create Room',
        presentation: 'modal',
     }}/>
    
      <Stack.Screen name="(room)" options={{
        headerShown:false, }}/>
     
      </Stack>

    </>
  );
}
