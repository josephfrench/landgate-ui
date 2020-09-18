import { Injectable } from '@angular/core';
import {delay, map, take, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {PersonModel} from '../models/person-model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  peopleSubject: BehaviorSubject<PersonModel[]> = new BehaviorSubject<PersonModel[]>([]);
  people$: Observable<PersonModel[]> = this.peopleSubject.asObservable();

  constructor() {}

  private mockPeopleList = [
    {firstName: 'John', lastName: 'Doe', age: '21', workTitle: 'Wanna be Signer'},
    {firstName: 'Jane', lastName: 'Doe', age: '22', workTitle: 'Signer'},
    {firstName: 'Bob', lastName: 'Barker', age: '80', workTitle: 'TV Host'},
    {firstName: 'John', lastName: 'Doe', age: '21', workTitle: 'Wanna be Signer'},
  ];

  getPeople(): Observable<PersonModel[]> {
    // TODO: Finish this implementation using the data from mockPeopleList
    return of(true).pipe(
      delay(100),
      map(() => {
        return this.mapMockPeopleToPersonModelArray(this.mockPeopleList);
      }),
      tap(people => this.updatePeopleSubject(people))
    );
  }

  savePerson(originalPerson, updatedPerson): Observable<any> {
    return this.people$.pipe(
      take(1),
      map(people => {
        return people.map(person => _.isEqual(person, originalPerson) ? updatedPerson : person);
      }),
      tap(people => this.updatePeopleSubject(people))
    );
  }

  private mapMockPeopleToPersonModelArray(mockPeople: any): PersonModel[] {
    const personModelArray = mockPeople.map(p => new PersonModel({...p, age: +p.age, jobTitle: p.workTitle}));
    return this.removeDuplicates(personModelArray);
  }

  private updatePeopleSubject(people: PersonModel[]) {
    this.peopleSubject.next(people);
  }

  private removeDuplicates(personModelArray: any) {
    return _.uniqWith(personModelArray, _.isEqual);
  }
}
