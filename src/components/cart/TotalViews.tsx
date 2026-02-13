import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs } from 'react-native-size-matters'
import AppText from '../texts/AppText'

const TotalViews = () => {
  return (
    <View>
      <View style={styles.row}>
        <AppText>Order Total:</AppText>
      </View>
      <View style={styles.row}></View>
      <View style={styles.row}></View>
    </View>
  )
}

export default TotalViews

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:vs(10)
    }
})