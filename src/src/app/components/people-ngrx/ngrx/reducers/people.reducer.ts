import { Action, createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.actions';
import {PersonModel} from '../../../../models/person-model';
import * as _ from 'lodash';

export const peopleFeatureKey = 'people-ngrx';

// TODO: Need to add People to the store and initialize it.
export interface State {
  people: PersonModel[];
}

export const initialState: State = {
  people: []
};

export const _reducer = createReducer(
  initialState,
  on(PeopleActions.loadPeoples, state => state),
  on(PeopleActions.loadedPeople, (state, p) => ({people: p.people}) ),
  on(PeopleActions.updatePerson, (state, update ) => {
    return {people: state.people.map(person => _.isEqual(person, update.originalPerson) ? update.updatedPerson : person) };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}

