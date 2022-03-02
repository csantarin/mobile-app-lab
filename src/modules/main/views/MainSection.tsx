import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export interface MainSectionProps {
  title: string;
}

const MainSection = (props: React.PropsWithChildren<MainSectionProps>) => {
  const { children, title } = props;
  const isDarkMode = useColorScheme() === 'dark';
  const titleStyle = [
    titleStyles.text,
    isDarkMode
      ? titleStyles.light
      : titleStyles.dark,
  ];
  const childrenStyle = [
    childrenStyles.text,
    isDarkMode
      ? childrenStyles.light
      : childrenStyles.dark,
  ];

  return (
    <View style={containerStyles.view}>
      <Text style={titleStyle}>
        {title}
      </Text>
      <Text style={childrenStyle}>
        {children}
      </Text>
    </View>
  );
};

const titleStyles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
  light: {
    color: Colors.white,    
  },
  dark: {
    color: Colors.black,
  },
});

const childrenStyles = StyleSheet.create({
  text: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  light: {
    color: Colors.light,
  },
  dark: {
    color: Colors.dark,
  },
});

const containerStyles = StyleSheet.create({
  view: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default MainSection;
