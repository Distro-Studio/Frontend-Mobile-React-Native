import React from 'react';
import {ModalProvider} from './ModalContext';

type ContextProps = {
  children: JSX.Element;
};

const AppContext = ({children}: ContextProps) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default AppContext;
