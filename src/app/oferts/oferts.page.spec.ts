import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfertsPage } from './oferts.page';

describe('OfertsPage', () => {
  let component: OfertsPage;
  let fixture: ComponentFixture<OfertsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OfertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
