import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Experience } from './experience';
import { EXPERIENCES } from '@data/experience.data';

describe('Experience', () => {
  let component: Experience;
  let fixture: ComponentFixture<Experience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience]
    }).compileComponents();

    fixture = TestBed.createComponent(Experience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose experiences from data source', () => {
    expect(component.experiences()).toEqual(EXPERIENCES);
  });

  it('should render same number of timeline items as data source', () => {
    const items = fixture.debugElement.queryAll(By.css('.tl-item'));

    expect(items.length).toBe(EXPERIENCES.length);
  });

  it('should render all company names', () => {
    const text = fixture.nativeElement.textContent;

    EXPERIENCES.forEach(item => {
      expect(text).toContain(item.company);
    });
  });

  it('should render all roles', () => {
    const text = fixture.nativeElement.textContent;

    EXPERIENCES.forEach(item => {
      expect(text).toContain(item.role);
    });
  });

  it('should render education block', () => {
    const education =
      fixture.nativeElement.querySelector('.education');

    expect(education.textContent).toContain(
      'Analista Programador Universitario'
    );
  });
});