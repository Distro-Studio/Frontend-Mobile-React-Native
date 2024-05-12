import React from 'react';
import {ModalProvider} from './ModalContext';
import {MapsProvider} from './MapsContext';
import {AuthProvider} from './AuthContext';
import {PresenceProvider} from './PresenceContext';

type ContextProps = {
  children: JSX.Element;
};

const AppContext = ({children}: ContextProps) => {
  return (
    <ModalProvider>
      <AuthProvider>
        <PresenceProvider>
          <MapsProvider>{children}</MapsProvider>
        </PresenceProvider>
      </AuthProvider>
    </ModalProvider>
  );
};

export default AppContext;
