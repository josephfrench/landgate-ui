import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PersonModel} from '../../models/person-model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {select, Store} from '@ngrx/store';
import {getPeople} from './ngrx/selectors/people.selectors';


@Component({
  selector: 'app-people-ngrx-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss']
})
export class PeopleNgrxComponent implements OnInit {

  // TODO: Include the Store and get the data from the NgrxStore

  people$: Observable<PersonModel[]>;
  personToEdit = null;

  constructor(private _modalService: NgbModal,
              private _store: Store<{people: PersonModel[]}>
  ) {
    this._store.dispatch({type: '[People] Load Peoples'});
  }

  ngOnInit() {
    this.setPeople$();
  }

  onEditClick(person: PersonModel, personContent) {
    this.personToEdit = person;
    const modalRef = this._modalService.open(personContent, {size: 'lg', centered: true, scrollable: true});
  }

  private setPeople$() {
    this.people$ = this._store.pipe(select(getPeople));
  }
}

