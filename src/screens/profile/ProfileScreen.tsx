import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import HomeHeader from '../../components/headers/HomeHeader'

const ProfileScreen = () => {
  return (
     <AppSaveView>
      <HomeHeader/>
      <Text>ProfileScreen</Text>
    </AppSaveView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})