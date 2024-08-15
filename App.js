import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade:true})
  }, [])
  return (
    <View>
      <Text style={{color: 'red', fontSize:27 , fontFamily:'Roboto-Italic'}}>test kata akawsp;da  l,sml;amsd </Text>
    </View>
  )
}

const styles = StyleSheet.create({})