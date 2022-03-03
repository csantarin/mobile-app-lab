import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { WebViewSource } from 'react-native-webview/lib/WebViewTypes';

const SOURCE: WebViewSource = { uri: 'https://reactnative.dev/' };

const ExampleWebView = () => {
  return (
    <WebView
      containerStyle={styles.exampleWebViewContainer}
      javaScriptEnabled
      originWhitelist={['*']}
      source={SOURCE}
      startInLoadingState
      style={styles.exampleWebView}
    />
  );
};

const styles = StyleSheet.create({
  exampleWebView: {
    flex: 1,
  },
  exampleWebViewContainer: {
    width: 0,
    height: 0,
    position: 'absolute',
  },
});

export default ExampleWebView;
