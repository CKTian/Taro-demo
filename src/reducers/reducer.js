import { createStore } from "redux";

const initialState = {
  addedFood: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FOOD":
      return { ...state, addedFood: [...state.addedFood, action.payload] };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
