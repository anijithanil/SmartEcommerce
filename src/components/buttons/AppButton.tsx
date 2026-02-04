import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'

const AppButton = ({onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={[
        styles.button
    ]}
    >

    </TouchableOpacity>  )
}

export default AppButton

const styles = StyleSheet.create({
    button:{
        width: "100%",
        height: vs(40),
        backgroundColor: "blue",
        borderRadius: s(25),
        justifyContent: "center",
        alignItems: "center",
        aligself:"center"
    }
})