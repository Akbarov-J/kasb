import { Component } from '@angular/core';
import { ProfessionsDetailsHero } from '../../components/professions-details-hero/professions-details-hero';
import { EntranceInstitute } from '../../components/entrance-institute/entrance-institute';
import { CoursesSection } from '../../../student/components/courses-section/courses-section';

@Component({
  selector: 'app-professions-details',
  imports: [ProfessionsDetailsHero, EntranceInstitute, CoursesSection],
  templateUrl: './professions-details.html',
  styleUrl: './professions-details.scss',
})
export default class ProfessionsDetails {
  ngOnInit(): void {
    window.scrollTo({ top: 0 }); // плавный скролл
    // или:
    // window.scrollTo(0, 0); // мгновенно
  }
}
