// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth, API, graphqlOperation } from 'aws-amplify'

import Message from './components/Message/Message'
import awsconfig from './aws-exports'

const initialState = { name: '', description: '' }

Auth.configure(awsconfig)

const App = () => {
  return (
    <View style={styles.container}>
      <Message text='abc' isUserMessage={false} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  todo: { marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 },
})

export default withAuthenticator(App)
