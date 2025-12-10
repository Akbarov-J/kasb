import { Component } from '@angular/core';
import { Courses } from '../../../../../shared/components/courses/courses';

@Component({
  selector: 'app-course-list',
  imports: [Courses],
  templateUrl: './course-list.html',
  styleUrl: './course-list.scss',
})
export default class CourseList {}
