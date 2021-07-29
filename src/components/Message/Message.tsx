import React from 'react'
import { View, StyleSheet } from 'react-native'
import clsx from 'clsx'

type Props = {
  text: string

  /**If the logged in user sent the message */
  isUserMessage: boolean
}

const Message = ({ text, isUserMessage }: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.message, isUserMessage ? styles.blue : styles.white]}
      >
        {text}
        {isUserMessage}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
  },
  message: {
    backgroundColor: 'red',
    height: 'auto',
    padding: 5,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 5,
  },
  blue: { backgroundColor: 'blue', color: 'white', alignSelf: 'flex-end' },
  white: {
    backgroundColor: '#d9dedb',
    color: 'black',
    alignSelf: 'flex-start',
  },
})

export default Message
