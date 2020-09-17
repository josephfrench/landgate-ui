import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {concatMap, mergeMap, switchMap, take, tap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as PeopleActions from '../actions/people.actions';
import {loadedPeople} from '../actions/people.actions';
import {PeopleService} from '../../../../services/people.service';


@Injectable()
export class PeopleEffects {

  loadPeoples$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PeopleActions.loadPeoples),
      // TODO Implement a Load People Action that gets the data from the service.
      mergeMap(() => this._peopleService.getPeople()),
      concatMap((people) => of(loadedPeople(people)))
    );
  });

  constructor(private actions$: Actions,
              private _peopleService: PeopleService) {}

}
