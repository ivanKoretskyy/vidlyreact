import { Observable } from "rxjs";
import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export const fetchPosts = () => ({ type: 'FETCH_POSTS' });
export const fetchPostsSuccess = (payload: any) => ({ type: 'FETCH_POSTS_SUCCESS', payload });


export const postsEpic = (action$: Observable<any>) => {
  console.log('in epick')
  return action$.pipe(
    ofType('FETCH_POSTS'),
    mergeMap((action: any) =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`).pipe(
        map((response: any) => {
          const response2 = response.concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response).concat(response);
          return fetchPostsSuccess(response2)
        })
      ))
  )
}