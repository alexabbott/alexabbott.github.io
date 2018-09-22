import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedItemsComponent } from './curated-items.component';

describe('CuratedItemsComponent', () => {
  let component: CuratedItemsComponent;
  let fixture: ComponentFixture<CuratedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
