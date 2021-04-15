import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntableComponent } from './syntable.component';

describe('SyntableComponent', () => {
  let component: SyntableComponent;
  let fixture: ComponentFixture<SyntableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyntableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
