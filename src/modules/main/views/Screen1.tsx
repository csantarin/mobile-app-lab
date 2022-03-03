import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { navigationService } from '~modules/navigation';

import { MainRoutes } from '../navigation/mainRoutes';

const Screen1 = () => {
  const handlePress = () => {
    navigationService.navigateTo(MainRoutes.Screen2);
  };

  console.log(`${Screen1}.render`);

  return (
    <View style={styles.screen1Container}>
      <Text>Screen 1</Text>
      <Button
        title="Go to 2"
        onPress={handlePress}
      />
    </View>
  );
};

Screen1.toString = () => 'HomeScreen';

const styles = StyleSheet.create({
  screen1Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen1;
