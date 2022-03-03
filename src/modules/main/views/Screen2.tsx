import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { ExampleWebView } from '~modules/example';
import { navigationService } from '~modules/navigation';

import { MainRoutes } from '../navigation/mainRoutes';

const Screen2 = () => {
  const handlePress = () => {
    navigationService.navigateTo(MainRoutes.Screen3);
  };

  console.log(`${Screen2}.render`);

  return (
    <View style={styles.screen2Container}>
      <Text>Screen 2</Text>
      <Button
        title="Go to 3"
        onPress={handlePress}
      />
      <ExampleWebView />
    </View>
  );
};

Screen2.toString = () => 'Screen2';

const styles = StyleSheet.create({
  screen2Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen2;
