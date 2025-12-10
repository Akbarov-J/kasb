import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [Carousel, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
