import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonModel} from '../../../models/person-model';
import {PeopleService} from '../../../services/people.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person: PersonModel;
  @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = this._fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]),
    jobTitle: new FormControl('', [Validators.required]),
  });

  constructor(private _fb: FormBuilder,
              private _peopleService: PeopleService) { }

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
      this._peopleService.savePerson(this.person, this.form.getRawValue()).pipe(
        take(1),
      ).subscribe(() => {
        this.close();
      });
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
