import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Price = () => {
  return (
    <View style={styles.container}> 
      <Text>Price</Text>
    </View>
  )
}

export default Price

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }
})