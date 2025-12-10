import { Component } from '@angular/core';
import { Hero } from '../../../../../shared/components/hero/hero';
import { Opportunities } from '../../../psychologist/components/opportunities/opportunities';
import { CoursesSection } from '../../../student/components/courses-section/courses-section';
import { Documents } from '../../../main/components/documents/documents';

@Component({
  selector: 'app-users',
  imports: [Hero, Opportunities, CoursesSection, Documents],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export default class Users {}
