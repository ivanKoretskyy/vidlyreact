
import {userEpic} from './userEpic';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(userEpic); 
