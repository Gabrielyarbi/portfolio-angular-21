import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from '../../features/sections/hero/hero';
import { About } from '../../features/sections/about/about';
import { Skills } from '../../features/sections/skills/skills';
import { Projects } from '../../features/sections/projects/projects';
import { Experience } from '../../features/sections/experience/experience';
import { Contact } from '../../features/sections/contact/contact';

@Component({
  selector: 'app-home-page',
  imports: [Navbar,
    Footer,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Contact],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage { }
