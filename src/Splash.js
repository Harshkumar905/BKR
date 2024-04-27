import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';


const Splash = ({navigation}) => {
  navigation.navigate('Signup')
  return (
    <View className="flex bg-white justify-center items-center h-full bg-red-100">
      <View className=" mb-4 ">
        <Animatable.Image
          animation="zoomInUp"
          duration={1500}
          source={require('../src/Logo.png')}
          className="w-72 h-96"
        />
      </View>
      <View className="flex ">
        <Animatable.Text />
        <Animatable.Text
          animation="zoomInUp"
          iterationCount={1}
          duration={2000}
          direction="alternate"
          className="text-center font-bold text-green-700 text-2xl mt-0">
          Bekar Ko Aakar
        </Animatable.Text>
        {/* <Text className="text-center font-bold text-violet-600 text-lg">
          Bundel U
        </Text>
        <Animatable.Text
          animation="zoomIn"
          iterationCount={1}
          duration={2000}
          direction="alternate"
          className="text-center text-yellow-600 font-Italic ">
          
        </Animatable.Text> */}
        

        <Text></Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})