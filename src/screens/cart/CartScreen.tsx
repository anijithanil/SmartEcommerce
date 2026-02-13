import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import HomeHeader from '../../components/headers/HomeHeader'
import EmptyCart from './EmptyCart'
import CartItem from '../../components/cart/CartItem'
import TotalViews from '../../components/cart/TotalViews'

const CartScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader/>
      <CartItem/>
      <TotalViews/>
    </AppSaveView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})