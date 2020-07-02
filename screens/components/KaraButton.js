import React from 'react'
import { View, Text, Button } from 'react-native'

const KaraButton = ({onPress, children}) => {
  return (
    <View>
      <Button onPress={onPress}>{children}</Button>
    </View>
  )
}

export default KaraButton
