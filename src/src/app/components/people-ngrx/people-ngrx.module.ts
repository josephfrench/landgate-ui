import {NgModule} from '@angular/core';
import {PeopleNgrxComponent} from './people-ngrx.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromPeople from './ngrx/reducers/people.reducer';
import {PeopleEffects} from './ngrx/effects/people.effects';
import {PersonNgrxComponent} from './person-ngrx/person-ngrx.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {PeopleNgrxRoutingModule} from './people-ngrx-routing.module';

@NgModule({
  declarations: [PeopleNgrxComponent, PersonNgrxComponent],
  exports: [PeopleNgrxComponent],
  imports: [
    StoreModule.forFeature(fromPeople.peopleFeatureKey, fromPeople.reducer),
    EffectsModule.forFeature([PeopleEffects]),
    CommonModule,
    ReactiveFormsModule,
    PeopleNgrxRoutingModule
  ]
})
export class PeopleNgrxModule {
}
