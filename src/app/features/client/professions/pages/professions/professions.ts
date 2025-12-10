import { Component } from '@angular/core';
import { ProfessionsHero } from '../../components/professions-hero/professions-hero';
import { AllCourses } from '../../components/all-courses/all-courses';

@Component({
  selector: 'app-professions',
  imports: [ProfessionsHero, AllCourses],
  templateUrl: './professions.html',
  styleUrl: './professions.scss',
})
export default class Professions {}
