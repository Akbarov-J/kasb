import { Component } from '@angular/core';
import { Hero } from '../../../../../shared/components/hero/hero';
import { Opportunities } from '../../components/opportunities/opportunities';
import { AboutOfProject } from '../../components/about-of-project/about-of-project';
import { Documents } from '../../../main/components/documents/documents';
import { CoursesSection } from '../../../student/components/courses-section/courses-section';

@Component({
  selector: 'app-psychologist',
  imports: [Hero, Opportunities, AboutOfProject, CoursesSection, Documents],
  templateUrl: './psychologist.html',
  styleUrl: './psychologist.scss',
})
export default class Psychologist {}
