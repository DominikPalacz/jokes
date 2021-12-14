/* eslint-disable default-param-last */
const jokeMock1 = {
  success: { total: 1 },
  contents: {
    jokes: [
      {
        description: "Joke of the day ",
        language: "en",
        background: "",
        category: "jod",
        date: "2021-12-14",
        joke: {
          title: "College light bulb",
          lang: "en",
          length: "106",
          clean: "0",
          racial: "0",
          date: "2021-12-14",
          id: "gJDSuynRByTpbFZuGYt7mgeF",
          text: "Knock Knock\r\n Who's there?\r\n Stu!\r\n Stu who?\r\n Stu late to ask questions!",
        },
      },
    ],
    copyright: "2019-20 https://jokes.one",
  },
};
const jokeMock2 = {
  success: { total: 1 },
  contents: {
    jokes: [
      {
        description: "Joke of the day ",
        language: "en",
        background: "",
        category: "jod",
        date: "2021-12-14",
        joke: {
          title: "College light bulb",
          lang: "en",
          length: "106",
          clean: "0",
          racial: "0",
          date: "2021-12-14",
          id: "aJDSuynRByTpbFZuGYt7mgeF",
          text: "22222222\r\n Who's there?\r\n Stu!\r\n Stu who?\r\n S22222222!",
        },
      },
    ],
    copyright: "2019-20 https://jokes.one",
  },
};

const initialState = {
  jokesUserArchive: [],
  jokesDayArchive: [jokeMock1, jokeMock2],
  // dayJoke: null,
  dayJoke: jokeMock1,
  isLoading: false,
};

// eslint-disable-next-line no-unused-vars
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "joke/success":
      return {
        ...state,
        dayJoke: action.payload,
        jokesDayArchive: [...state.jokesDayArchive, action.payload],
        isLoading: false,
      };
    case "joke/add":
      return {
        ...state,
        jokesUserArchive: [...state.jokesUserArchive, action.data],
      };
    case "joke/request":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
