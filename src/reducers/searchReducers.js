const initialState = {
  textInput: '',
  searchTerms: [],
  results: []
};

export default function searchReducers(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, textInput: action.text };
    case 'SAVE_RESULTS':
      return {
        ...state,
        searchTerms: state.searchTerms.concat(state.textInput),
        results: action.results
      };
    default:
      return state;
  }
}
