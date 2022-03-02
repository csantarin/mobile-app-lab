import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ExampleText from '../views/ExampleText';

it('renders correctly', () => {
  renderer.create(<ExampleText />);
});
