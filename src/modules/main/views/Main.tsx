import React from 'react';

import { navigationService } from '~modules/navigation';

import MainNavigationContainer from './MainNavigationContainer';

const Main = () => {
  return (
    <MainNavigationContainer ref={navigationService.registerApi} />
  );
};

export default Main;
