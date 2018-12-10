
const initialState = {
  counter: 1,
  user: null,
  loading: false,
  error: null,
  posts: []
}

function incrementCounter(state: any) {
  const counter = state.counter + 1;
  return { ...state, counter }
}

function decrementCounter(state: any) {
  const counter = state.counter - 1;
  return { ...state, counter }
}

function fetchUser(state: any, action: any) {
  return {
    ...state,
    loading: true,
    error: false
  }
}
function fetchUserSuccess(state: any, action: any) {
  return {
    ...state,
    user: { ...action.payload },
    loading: false,
    error: false
  }
}
function fetchUserFail(state: any, action: any) {
  return {
    ...state,
    loading: false,
    error: action.payload
  }
}

function fetchPostsSuccess(state: any, action: any) {
  const result = {
    ...state,
    posts: [...action.payload],
    loading: false,
    error: false
  }
  return result;
}

function fetchPosts(state: any, action: any) {
  console.log('in reducer');
  return {
    ...state,
    loading: true,
    error: false
  }
}


const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return incrementCounter(state);
    case 'DECREMENT':
      return decrementCounter(state);
    case 'FETCH_USER':
      return fetchUser(state, action);
    case 'FETCH_USER_SUCCESS':
      return fetchUserSuccess(state, action);
    case 'FETCH_USER_FAIL':
      return fetchUserFail(state, action);
    case 'FETCH_POSTS':
      return fetchPosts(state, action);
    case 'FETCH_POSTS_SUCCESS':
      return fetchPostsSuccess(state, action);
    default:
      return { ...state };
  }
}

export default reducer;