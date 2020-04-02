import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext)

  return <View style={styles.container}>
    <NavigationEvents onWillBlur={clearErrorMessage} />
    <AuthForm
      headerText='Sign In To Your Account'
      errorMessage={state.errorMessage}
      submitButtonText='Sign In'
      onSubmit={signin}
    />
    <NavLink
      text='Don&apos;t have an account? Sign up instead'
      routeName='Signup'
    />
  </View>
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    justifyContent: 'center'
  }
})

export default SigninScreen