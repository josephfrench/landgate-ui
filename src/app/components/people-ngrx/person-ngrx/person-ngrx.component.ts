import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonModel} from '../../../models/person-model';
import {Store} from '@ngrx/store';
import {updatePerson} from '../ngrx/actions/people.actions';


@Component({
  selector: 'app-person-ngrx',
  templateUrl: './person-ngrx.component.html',
  styleUrls: ['./person-ngrx.component.scss']
})
export class PersonNgrxComponent implements OnInit {

  @Input() person: PersonModel;
  @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = this._fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]),
    jobTitle: new FormControl('', [Validators.required]),
  });

  constructor(private _fb: FormBuilder,
              private _store: Store<{people: PersonModel[]}>) { }

  ngOnInit() {
    this.form.getRawValue();
    this.patchFormValues();
  }

  get firstName() { return this.form.get('firstName');  }

  get lastName() { return this.form.get('lastName');  }

  get age() { return this.form.get('age');  }

  get jobTitle() { return this.form.get('jobTitle');  }

  onCancelClick() {
    this.close();
  }

  onSaveClick() {
    if (this.form.valid) {
      this._store.dispatch(updatePerson({originalPerson: this.person, updatedPerson: this.form.getRawValue()}));
      this.close();
    }
  }

  private patchFormValues() {
    if (this.person) {
      this.form.patchValue(this.person);
    }
  }

  private close() {
    this.closeEvent.emit(null);
  }
}
