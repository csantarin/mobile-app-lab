import React, { forwardRef } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LightText = forwardRef<Text, TextProps>((props, ref) => {
  return (
    <Text
      {...props}
      ref={ref}
      style={[
        props.style ?? {},
        styles.text
      ]}
    />
  )
});

const styles = StyleSheet.create({
  text: {
    color: Colors.light,
  },
});

export default LightText;
