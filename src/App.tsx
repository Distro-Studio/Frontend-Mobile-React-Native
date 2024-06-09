import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import AppContext from './contexts';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ReduxProvider from './redux/redux-provider';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <ReduxProvider>
          <AppContext>
            <Router />
          </AppContext>
        </ReduxProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
