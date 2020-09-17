import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonNgrxComponent } from './person-ngrx.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Store, StoreModule} from '@ngrx/store';

describe('PersonComponent', () => {
  let component: PersonNgrxComponent;
  let fixture: ComponentFixture<PersonNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonNgrxComponent ],
      providers: [
        Store
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
