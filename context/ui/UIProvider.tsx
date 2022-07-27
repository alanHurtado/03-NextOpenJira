import { FC, ReactNode, useReducer } from 'react';
import { uiReduccer, UIContext } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}
interface Props {
  children: ReactNode;
}
const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReduccer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({type:'UI-Open-sidebar'})
  } 
  const closeSideMenu = () => {
    dispatch({type:'UI-Close-sidebar'})
  } 
  const setIsAddEntry = (isAdd:boolean) => {
    dispatch({type:'UI-Set-addEntry', payload: isAdd})
  }
  const startDragging = (isDragging:boolean) => {
    dispatch({type:'UI-Start-Dragging', payload: isDragging})
  }
  
  
 
  return (
    <UIContext.Provider
      value={{
        ...state,

        //Methods
        openSideMenu,
        closeSideMenu,
        setIsAddEntry,
        startDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};