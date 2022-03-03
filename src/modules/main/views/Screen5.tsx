import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { navigationService } from '~modules/navigation';

import { MainRoutes } from '../navigation/mainRoutes';

const Screen5 = () => {
  const handlePress = () => {
    navigationService.navigateTo(MainRoutes.Screen1);
  };

  console.log(`${Screen5}.render`);

  return (
    <View style={styles.screen5Container}>
      <Text>Screen 5</Text>
      <Button
        title="Go to 1"
        onPress={handlePress}
      />
    </View>
  );
};

Screen5.toString = () => 'FifthScreen';

const styles = StyleSheet.create({
  screen5Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen5;
