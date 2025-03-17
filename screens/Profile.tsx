import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>Profile is good</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'lightgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})