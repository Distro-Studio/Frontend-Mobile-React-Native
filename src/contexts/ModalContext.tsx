import React, {createContext} from 'react';

type ModalProviderType = {
  children: JSX.Element;
};

type ModalType = {
  modal_out_range: string;
  modal_location: string;
};

type ModalActionType = {
  type: string;
  payload: string;
};

const initialState = {
  modal_out_range: '',
  modal_location: '',
};

const ModalReducers = (state: ModalType, action: ModalActionType) => {
  switch (action.type) {
    case 'show_modal_out_range':
      return {...state, modal_out_range: action.payload};
    case 'hide_modal_out_range':
      return {...state, modal_out_range: action.payload};
    case 'show_modal_location':
      return {...state, modal_location: action.payload};
    case 'hide_modal_location':
      return {...state, modal_location: action.payload};
    default:
      return state;
  }
};

export const ModalContext = createContext<{
  state: ModalType;
  dispatch: React.Dispatch<ModalActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const ModalProvider = ({children}: ModalProviderType) => {
  const [state, dispatch] = React.useReducer(ModalReducers, initialState);

  return (
    <ModalContext.Provider value={{state, dispatch}}>
      {children}
    </ModalContext.Provider>
  );
};
