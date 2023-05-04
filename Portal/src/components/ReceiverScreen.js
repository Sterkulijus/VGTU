import React from 'react';
import { View, Text } from 'react-native';

function ReceiverScreen({ route }) {
  const { myGroup } = route.params;

  return (
    <View>
      <Text>Received group ID: {myGroup}</Text>
    </View>
  );
}

export default ReceiverScreen;