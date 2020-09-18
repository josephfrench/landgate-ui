import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../services/people.service';
import {Observable} from 'rxjs';
import {PersonModel} from '../../models/person-model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-people-component',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people$: Observable<PersonModel[]>;
  personToEdit = null;

  // TODO: Include the PersonService and get the list of People
  constructor(private _peopleService: PeopleService,
              private _modalService: NgbModal
  ) { }

  ngOnInit() {
    this.setPeople$();
  }

  onEditClick(person: PersonModel, personContent) {
    this.personToEdit = person;
    const modalRef = this._modalService.open(personContent, {size: 'lg', centered: true, scrollable: true});
  }

  private setPeople$() {
    this._peopleService.getPeople().pipe(
      take(1)
    ).subscribe(() => {
      this.people$ = this._peopleService.people$;
    });
  }
}
