import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MainSection from '../views/MainSection';

it('renders correctly', () => {
  renderer.create(<MainSection title="MainSection" />);
});
