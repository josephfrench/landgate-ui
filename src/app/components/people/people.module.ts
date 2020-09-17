import {NgModule} from '@angular/core';
import {PeopleComponent} from './people.component';
import {PeopleRoutingModule} from './people-routing.module';
import {CommonModule} from '@angular/common';
import { PersonComponent } from './person/person.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PeopleComponent, PersonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PeopleRoutingModule,
  ],
  exports: [PeopleComponent]
})
export class PeopleModule {}
