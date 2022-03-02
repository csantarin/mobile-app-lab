import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MainBody from '../views/MainBody';

it('renders correctly', () => {
  renderer.create(<MainBody />);
});
