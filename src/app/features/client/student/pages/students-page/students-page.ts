import { Component } from '@angular/core';
import { Hero } from '../../../../../shared/components/hero/hero';
import { RoadMap } from '../../components/road-map/road-map';
import { Tests } from '../../components/tests/tests';
import { InfoMap } from '../../components/info-map/info-map';
import { TopUniversities } from '../../components/top-universities/top-universities';
import { CoursesSection } from '../../components/courses-section/courses-section';

@Component({
  selector: 'app-students-page',
  imports: [Hero, RoadMap, CoursesSection, Tests, InfoMap, TopUniversities],
  templateUrl: './students-page.html',
  styleUrl: './students-page.scss',
})
export default class StudentsPage {}
