import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbededTableComponent } from './embeded-table.component';

describe('EmbededTableComponent', () => {
  let component: EmbededTableComponent;
  let fixture: ComponentFixture<EmbededTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbededTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbededTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
