import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Projects } from './projects';
import { PROJECTS } from '@data/projects.data';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects]
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose projects from data source', () => {
    expect(component.projects()).toEqual(PROJECTS);
  });

  it('should render same number of project cards as data source', () => {
    const cards = fixture.debugElement.queryAll(By.css('.project'));

    expect(cards.length).toBe(PROJECTS.length);
  });

  it('should render all project titles', () => {
    const text = fixture.nativeElement.textContent;

    PROJECTS.forEach(project => {
      expect(text).toContain(project.title);
    });
  });

  it('should render featured badges only for featured projects', () => {
    const badges = fixture.debugElement.queryAll(By.css('.badge'));

    const featuredCount = PROJECTS.filter(
      project => project.featured
    ).length;

    expect(badges.length).toBe(featuredCount);
  });

  it('should render at least one external project link', () => {
    const links = fixture.debugElement.queryAll(
      By.css('.project__actions a')
    );

    expect(links.length).toBeGreaterThan(0);
  });
});