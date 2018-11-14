
const initialState = {
  counter: 1
}

function incrementCounter(state: any ) {
  const counter = state.counter + 1;
  return { ...state, counter}
}

function decrementCounter(state: any ) {
  const counter = state.counter - 1;
  return { ...state, counter}
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return incrementCounter(state);
    case 'DECREMENT':
      return decrementCounter(state);
    default:
      return { ...state };
  }
}

export default reducer;