import * as React from 'react';

export const LayoutContext = React.createContext(null);

export function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return {
        ...state,
        openSidenav: action.value,
      };
    case 'CHANGE_THEME': {
      return {
        ...state,
        theme: action.value,
      };
    }
    default:
      throw new Error(` Unexpected action type: ${action.type}`);
  }
}

export function LayoutControllerProvider({ children }) {
  const initialState = {
    openSidenav: false,
    theme: 'white',
  };

  const [controller, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

export function useLayoutContoller() {
  const context = React.useContext(LayoutContext);

  if (!context) {
    throw new Error('useLayoutContextContoller must be used within a LayoutContextProvider');
  }

  return context;
}

export const setOpenSidenav = (dispatch, value) => {
  dispatch({ type: 'OPEN_SIDEBAR', value });
};
export const setTheme = (dispatch, value) => {
  dispatch({ type: 'CHANGE_THEME', value });
};
