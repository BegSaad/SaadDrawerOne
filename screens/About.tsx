import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About us we are a super organizations</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'brown',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})