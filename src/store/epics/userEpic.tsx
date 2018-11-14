import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Epic } from 'redux-observable';

// action creators
export const fetchUser = (userName: string) => ({ type: 'FETCH_USER', payload: userName });
const fetchUserSuccess = (payload: any) => ({ type: 'FETCH_USER_SUCCESS', payload })


export const userEpic = (action$: any) => action$.pipe(
  ofType('FETCH_USER'),
  mergeMap((action: any) =>
    ajax.getJSON(`https://jsonplaceholder.typicode.com/users/${action.payload}`).pipe(
      map((response: any) => fetchUserSuccess(response))
    ))
)


