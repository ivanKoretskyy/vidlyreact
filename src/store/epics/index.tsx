
import { userEpic } from './userEpic';
import { combineEpics } from 'redux-observable';
import { postsEpic } from './postsEpic';

export const rootEpic = combineEpics(postsEpic); 
