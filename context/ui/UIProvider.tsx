import { FC, ReactNode, useReducer } from 'react';
import { uiReduccer, UIContext } from './';

export interface UIState {
  sidemenuOpen: boolean;
}
interface Props {
  children: ReactNode;
}
const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReduccer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({type:'UI-Open-sidebar'})
  } 
  const closeSideMenu = () => {
    dispatch({type:'UI-Close-sidebar'})
  } 
  return (
    <UIContext.Provider
      value={{
        ...state,

        //Methods
        openSideMenu,
        closeSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};