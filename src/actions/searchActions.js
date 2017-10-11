// Action Creator
// Function that returns an object with type and optional payload

export function newSearch(searchTerm) {
  return {
    type: 'NEW_SEARCH',
    searchTerm: searchTerm,
  };
}
