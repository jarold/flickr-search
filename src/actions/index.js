// Action Creator
// Function that returns an object with type and optional payload
import jsonp from 'jsonp';

export const updateInput = input => ({
  type: 'UPDATE_INPUT',
  text: input
});

export const newSearch = () => ({
  type: 'NEW_SEARCH'
})

const saveResults = (results) => {
  return {
    type: 'SAVE_RESULTS',
    results: results
  }
}
export const fetchResults = (searchTerm) => {
  return (dispatch) => {
      const API = `http://api.flickr.com/services/feeds/photos_public.gne?tags=${searchTerm}&format=json`;
      let results = [];

    jsonp(API, { param: 'jsoncallback' }, (err, data) => {
      results = data.items;
      dispatch(saveResults(results))
    }); 
  }
}