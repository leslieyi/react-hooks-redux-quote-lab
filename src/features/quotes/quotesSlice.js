// Action Creators
// TODO: Create action creators as defined in tests
//Action Creators for add, removing, upvoting and downvoting quotes.
export function addQuote(quote) {
  return {
    type: "quotes/add",
    payload: quote,
  };
}

export function removeQuote(quoteId) {
  return {
    type: "quotes/remove",
    payload: quoteId,
  };
}

export function upvoteQuote(quoteId) {
  return {
    type: "quotes/upvote",
    payload: quoteId,
  };
}

export function downvoteQuote(quoteId) {
  return {
    type: "quotes/downvote",
    payload: quoteId,
  };
}


// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  return state;
}
