import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegisterRequest } from './list-register-request';

describe('ListRegisterRequest', () => {
  let component: ListRegisterRequest;
  let fixture: ComponentFixture<ListRegisterRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListRegisterRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRegisterRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
