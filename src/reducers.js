/* eslint-disable default-param-last */
const initialState = {
  value: 0,
  dayJoke: null,
  isLoading: false,
  dayJokeMock: {
    "value": 0,
    "dayJoke": {
      "success": {
        "total": 1
      },
      "contents": {
        "jokes": [
          {
            "description": "Joke of the day ",
            "language": "en",
            "background": "",
            "category": "jod",
            "date": "2021-12-13",
            "joke": {
              "title": "Knock Knock - Stu who?",
              "lang": "en",
              "length": "73",
              "clean": "1",
              "racial": null,
              "date": "2021-12-13",
              "id": "rPnpQLekMINpwYpboXIz_AeF",
              "text": "Knock Knock\r\n Who's there?\r\n Stu!\r\n Stu who?\r\n Stu late to ask questions!"
            }
          }
        ],
        "copyright": "2019-20 https://jokes.one"
      }
    }
  }
};

// console.log(`%c "State before:"`, `background: #772;`, initialState);

// eslint-disable-next-line no-unused-vars
export default function rootReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "joke/success":
      return { ...state, dayJoke: action.payload, isLoading: false };
    case "joke/request":
      return { ...state, isLoading: true };
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
