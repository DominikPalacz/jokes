const initialState = {
  jokesUserArchive: [],
  jokesDayArchive: [],
  dayJoke: null,
  isLoading: false,
  errorMessage: null,
};

// eslint-disable-next-line default-param-last
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "joke/request":
      return { ...state, isLoading: true };

    case "joke/success":
      return {
        ...state,
        dayJoke: action.payload,
        jokesDayArchive: [...state.jokesDayArchive, action.payload],
        isLoading: false,
      };

    case "joke/fail":
      return { ...state, errorMessage: action.payload };

    case "joke/add":
      return {
        ...state,
        jokesUserArchive: [...state.jokesUserArchive, action.data],
      };

    case "joke/remove":
      return {
        ...state,
        jokesUserArchive: state.jokesUserArchive.filter(
          (item) => item.id !== action.data
        ),
        jokesDayArchive: state.jokesDayArchive.filter(
          (item) => item.contents?.jokes[0]?.joke?.id !== action.data
        ),
      };

    default:
      return state;
  }
}
