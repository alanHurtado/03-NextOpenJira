import { UIState } from "./";
type UIActionType =
  | { type: "UI-Open-sidebar" }
  | { type: "UI-Close-sidebar" }
  | { type: "UI-Set-addEntry"; payload: boolean }
  | { type: "UI-Start-Dragging"; payload: boolean };

export const uiReduccer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI-Close-sidebar":
      return {
        ...state,
        sidemenuOpen: false,
      };
    case "UI-Open-sidebar":
      return {
        ...state,
        sidemenuOpen: true,
      };
    case "UI-Set-addEntry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    case "UI-Start-Dragging":
      return {
        ...state,
        isDragging: action.payload,
      };
    default:
      return state;
  }
};
