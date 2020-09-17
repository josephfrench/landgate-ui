import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeople from '../reducers/people.reducer';
import {State} from '../reducers/people.reducer';

export const selectPeopleState = createFeatureSelector<fromPeople.State>(
  fromPeople.peopleFeatureKey
);

// TODO: need to add a selector for people.
export const getPeople = createSelector(
  selectPeopleState,
  (state: State) => state.people
);
