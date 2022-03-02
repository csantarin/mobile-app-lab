import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header as MainHeader,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { ExampleText } from '~modules/example';

import MainBody from './MainBody';
import MainSection from './MainSection';

const Main = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const statusBarStyle: StatusBarStyle = isDarkMode ? 'light-content' : 'dark-content';

  const backgroundStyle = isDarkMode
    ? containerStyles.dark
    : containerStyles.light;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={statusBarStyle} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <MainHeader />
        <MainBody>
          <MainSection title="Step One">
            Edit <Text style={textStyles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </MainSection>
          <MainSection title="See Your Changes">
            <ReloadInstructions />
          </MainSection>
          <MainSection title="Debug">
            <DebugInstructions />
          </MainSection>
          <MainSection title="Example">
            <ExampleText /> content here.
          </MainSection>
          <MainSection title="Learn More">
            Read the docs to discover what to do next:
          </MainSection>
          <LearnMoreLinks />
        </MainBody>
      </ScrollView>
    </SafeAreaView>
  );
};

const containerStyles = StyleSheet.create({
  dark: {
    backgroundColor: Colors.darker,
  },
  light: {
    backgroundColor: Colors.lighter,
  },
});

const textStyles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default Main;
