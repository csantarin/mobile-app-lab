import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { ExampleWebView } from '~modules/example';
import { navigationService } from '~modules/navigation';

import { MainRoutes } from '../navigation/mainRoutes';

const Screen4 = () => {
  const handlePress = () => {
    navigationService.navigateTo(MainRoutes.Screen5);
  };

  console.log(`${Screen4}.render`);

  return (
    <View style={styles.screen4Container}>
      <Text>Screen 4</Text>
      <Button
        title="Go to 5"
        onPress={handlePress}
      />
      <ExampleWebView />
    </View>
  );
};

Screen4.toString = () => 'Screen4';

const styles = StyleSheet.create({
  screen4Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen4;
