/* eslint-disable default-param-last */
const initialState = {
  value: 0,
  dayJoke: "wait",
};

// console.log(`%c "State before:"`, `background: #772;`, initialState);

// eslint-disable-next-line no-unused-vars
export default function rootReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "joke/success":
      return { ...state, dayJoke: action.payload.fact };
    default:
      return state;
  }
}

// * updateVeryNestedField
// * {
// *   ...state,
// *   first: {
// *     ...state.first,
// *     second: {
// *       ...state.first.second,
// *       [action.someId]: {
// *         ...state.first.second[action.someId],
// *         fourth: action.someValue
// *       }
// *     }
// *   }
// * }
