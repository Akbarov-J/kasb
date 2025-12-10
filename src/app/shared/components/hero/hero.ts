import { Component, input } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [ButtonDirective, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  title = input.required<string>();
  subTitle = input.required<string>();
  imgLink = input.required<string>();
}
