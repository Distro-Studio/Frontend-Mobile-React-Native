import React, {createContext} from 'react';

type AuthProviderContext = {
  children: JSX.Element;
};

type AuthType = {
  logged_in: boolean;
};

type AuthActionType = {
  type: string;
  payload: {};
};

const initialState = {
  logged_in: false,
};

const AuthReducers = (state: AuthType, action: AuthActionType) => {
  switch (action.type) {
    case 'save_logged':
      return {...state, logged_in: action.payload};
    case 'delete_logged':
      return {...state, logged_in: action.payload};
    default:
      return state;
  }
};

export const AuthContext = createContext<{
  state: AuthType;
  dispatch: React.Dispatch<AuthActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const AuthProvider = ({children}: AuthProviderContext) => {
  const [state, dispatch] = React.useReducer(AuthReducers, initialState);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};
