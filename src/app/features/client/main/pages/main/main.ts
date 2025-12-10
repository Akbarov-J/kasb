import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { MainStatistic } from '../../components/main-statistic/main-statistic';
import { News } from '../../components/news/news';
import { About } from '../../components/about/about';
import { Goal } from '../../components/goal/goal';
import { Documents } from '../../components/documents/documents';

@Component({
  selector: 'app-main',
  imports: [Hero, MainStatistic, News, About, Goal, Documents],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export default class Main {}
