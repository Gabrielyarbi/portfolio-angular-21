import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Navbar } from './navbar';
import { NAV_LINKS } from '@data/nav-links.data';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar]
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose nav links from data source', () => {
    expect(component.links()).toEqual(NAV_LINKS);
  });

  it('should render same number of links as data source', () => {
    const links = fixture.debugElement.queryAll(By.css('.nav__links a'));

    expect(links.length).toBe(NAV_LINKS.length);
  });

  it('should render each link label', () => {
    const text = fixture.nativeElement.textContent;

    NAV_LINKS.forEach(link => {
      expect(text).toContain(link.label);
    });
  });

  it('should render CV button', () => {
    const button = fixture.nativeElement.querySelector('.btn');

    expect(button.textContent).toContain('CV');
  });
});