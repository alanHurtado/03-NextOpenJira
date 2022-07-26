import { UIState } from './';
type UIActionType = { type: 'UI-Open-sidebar' } | { type: 'UI-Close-sidebar' };

export const uiReduccer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI-Close-sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
    case 'UI-Open-sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
    default:
      return state;
  }
};

