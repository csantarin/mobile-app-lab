import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MainBody = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;
  const isDarkMode = useColorScheme() === 'dark';
  const mainBodyStyle = isDarkMode ? styles.dark : styles.light;

  return (
    <View style={mainBodyStyle}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: Colors.black,
  },
  light: {
    backgroundColor: Colors.white,
  },
});

export default MainBody;
