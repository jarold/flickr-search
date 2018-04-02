// Action Creator
// Function that returns an object with type and optional payload

export const newSearch = searchTerm => ({
  type: 'NEW_SEARCH',
  searchTerm: searchTerm
});
