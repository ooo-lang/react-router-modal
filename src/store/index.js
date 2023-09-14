import { createStore } from "redux";

const initialState = {
  background: undefined,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return {
        ...state,
        background: action.payload
      };
    default:
      return state;
  }
}

const sotre = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default sotre;