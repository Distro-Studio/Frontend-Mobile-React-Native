import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import AppContext from './contexts';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppContext>
        <Router />
      </AppContext>
    </NavigationContainer>
  );
}

export default App;
