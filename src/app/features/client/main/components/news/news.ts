import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-news',
  imports: [Carousel],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News {}
