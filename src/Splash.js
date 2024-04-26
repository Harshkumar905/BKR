import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';


const Splash = ({navigation}) => {
  return (
    <View className="flex bg-white justify-center items-center h-full">
      <View className=" mb-12">
        <Animatable.Image
          animation="zoomInUp"
          duration={1500}
          source={require('../src/Logo.png')}
          className="w-72 h-96"
        />
      </View>
      <View className="flex gap-2">
        {/* <Animatable.Text /> */}
        {/* <Animatable.Text
          animation="zoomInUp"
          iterationCount={1}
          duration={2000}
          direction="alternate"
          className="text-center font-bold text-violet-600 text-lg mt-5">
          
        </Animatable.Text> */}
        {/* <Text className="text-center font-bold text-violet-600 text-lg">
          Bundel U
        </Text> */}
        {/* <Animatable.Text
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