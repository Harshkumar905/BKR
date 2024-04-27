import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { EnvelopeIcon } from "react-native-heroicons/solid";

// import { Image } from 'react-native-animatable'

const Signup = ({navigation}) => {
  return (
    <ScrollView className="bg-red-100">
      <View className="flex justify-center content-center flex-1 mt-16">
        <Image
          source={require('../src/Logo.png')}
          className="w-40 h-36 mt-5 mx-auto px-auto "
          resizeMode="center"
        />
        <Text className="text-center font-bold text-3xl mt-2">Bekaar Ko</Text>
        <Text className="text-center font-bold text-3xl">Aakaar</Text>
        <Text className="text-center font-bold text-5xl mt-32">Sign Up</Text>
        <Text className="text-center font-medium text-base mb-5">

          Continue with Mail
        </Text>
    


        <TouchableOpacity
        onPress={() => {
            navigation.navigate('Signup2')
        }}
        className="bg-yellow-200 flex justify-center content-center flex-row m-auto w-auto px-10 h-12 pt-2 rounded-full"
        >   
            <EnvelopeIcon color="black" className="rounded-lg" size={35}/>
            <Text className="text-center ml-3 text-xl py-auto">Continue with Mail</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
