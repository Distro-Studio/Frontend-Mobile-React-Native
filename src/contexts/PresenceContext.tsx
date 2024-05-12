import React, {createContext} from 'react';

type PresenceProviderType = {
  children: JSX.Element;
};

type PresenceType = {
  presence_in: boolean;
  presence_success: boolean;
  presence_fail: boolean;
};

type PresenceActionType = {
  type: string;
  payload: boolean;
};

const initialState = {
  presence_in: false,
  presence_success: false,
  presence_fail: false,
};

const PresenceReducers = (state: PresenceType, action: PresenceActionType) => {
  switch (action.type) {
    case 'presence_in':
      return {...state, presence_in: action.payload};
    case 'presence_success':
      return {...state, presence_success: action.payload};
    case 'presence_fail':
      return {...state, presence_fail: action.payload};
    default:
      return state;
  }
};

export const PresenceContext = createContext<{
  state: PresenceType;
  dispatch: React.Dispatch<PresenceActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const PresenceProvider = ({children}: PresenceProviderType) => {
  const [state, dispatch] = React.useReducer(PresenceReducers, initialState);

  return (
    <PresenceContext.Provider value={{state, dispatch}}>
      {children}
    </PresenceContext.Provider>
  );
};
