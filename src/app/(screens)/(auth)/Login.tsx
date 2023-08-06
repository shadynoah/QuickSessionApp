import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { i18n } from '../../i18n'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>Login</Text>
      <Text>{i18n.t('welcome.buttons.login')}</Text>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center"
  },
  txtStyle: {
    marginBottom: 20,
  },
});
