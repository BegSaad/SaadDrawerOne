import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text>Setting is here  </Text>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
 
    container: {
      padding: 10,
      backgroundColor: 'lightgray',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})