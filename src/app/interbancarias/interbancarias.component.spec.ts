import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterbancariasComponent } from './interbancarias.component';

describe('InterbancariasComponent', () => {
  let component: InterbancariasComponent;
  let fixture: ComponentFixture<InterbancariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterbancariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterbancariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
