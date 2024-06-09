import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {reduxStore} from './index';

export const persistor = persistStore(reduxStore);

function ReduxProvider({children}) {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
