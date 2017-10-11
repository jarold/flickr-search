export default function searchReducers(state = [], action) {
  switch (action.type) {
    case 'NEW_SEARCH':
      return [...state, action.searchTerm];
    default:
      return state;
  }
}
