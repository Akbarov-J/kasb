import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-surveys',
  imports: [ButtonDirective],
  templateUrl: './surveys.html',
  styleUrl: './surveys.scss',
})
export default class Surveys {}
