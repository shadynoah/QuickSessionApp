import { Stack } from 'expo-router'
import React from 'react'
import { View ,Text} from 'react-native'

const StackLayout = () => {
  return (
    <>
    <View style={{flex:1,justifyContent:'center'}}>
    <Stack  screenOptions={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
        }} />
    </View>
   
    </>
     
  )
}

export default StackLayout