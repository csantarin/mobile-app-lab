import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { ExampleWebView } from '~modules/example';
import { navigationService } from '~modules/navigation';

import { MainRoutes } from '../navigation/mainRoutes';

const Screen3 = () => {
  const handlePress = () => {
    navigationService.navigateTo(MainRoutes.Screen4);
  };

  console.log(`${Screen3}.render`);

  return (
    <View style={styles.screen3Container}>
      <Text>Screen 3</Text>
      <Button
        title="Go to 4"
        onPress={handlePress}
      />
      <ExampleWebView />
    </View>
  );
};

Screen3.toString = () => 'Screen3';

const styles = StyleSheet.create({
  screen3Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen3;
