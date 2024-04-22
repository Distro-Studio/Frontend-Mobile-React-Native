import React from 'react';
import {ModalProvider} from './ModalContext';
import {MapsProvider} from './MapsContext';
import {AuthProvider} from './AuthContext';

type ContextProps = {
  children: JSX.Element;
};

const AppContext = ({children}: ContextProps) => {
  return (
    <ModalProvider>
      <AuthProvider>
        <MapsProvider>{children}</MapsProvider>
      </AuthProvider>
    </ModalProvider>
  );
};

export default AppContext;
