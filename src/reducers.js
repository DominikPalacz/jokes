/* eslint-disable default-param-last */
const initialState = {
  value: 0,
  jokes: [{ id: 0, text: "Ha ha" }],
};

// console.log(`%c "State before:"`, `background: #772;`, initialState);

// eslint-disable-next-line no-unused-vars
export default function rootReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
  // return state;
}
