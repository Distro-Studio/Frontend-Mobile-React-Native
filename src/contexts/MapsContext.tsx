import React, {createContext} from 'react';

type MapsProviderContext = {
  children: JSX.Element;
};

type MapsCoords = {
  coords: {
    lat: number;
    long: number;
  };
};

type MapsActionType = {
  type: string;
  payload: {};
};

const initialState = {
  coords: {
    lat: 0,
    long: 0,
  },
};

const ModalReducers = (state: MapsCoords, action: MapsActionType) => {
  switch (action.type) {
    case 'save_coords':
      return {...state, coords: action.payload};
    case 'delete_coords':
      return {...state, coords: action.payload};
    default:
      return state;
  }
};

export const MapsContext = createContext<{
  state: MapsCoords;
  dispatch: React.Dispatch<MapsActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const MapsProvider = ({children}: MapsProviderContext) => {
  const [state, dispatch] = React.useReducer(ModalReducers, initialState);

  return (
    <MapsContext.Provider value={{state, dispatch}}>
      {children}
    </MapsContext.Provider>
  );
};
