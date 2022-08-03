import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopasComponent } from './ropas.component';

describe('RopasComponent', () => {
  let component: RopasComponent;
  let fixture: ComponentFixture<RopasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
