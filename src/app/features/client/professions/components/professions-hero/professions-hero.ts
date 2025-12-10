import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-professions-hero',
  imports: [Select, FormsModule],
  templateUrl: './professions-hero.html',
  styleUrl: './professions-hero.scss',
})
export class ProfessionsHero {
  cities: any[] | undefined;

  selectedCity: any | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'Matematika', code: 'NY' },
      { name: 'Ingiliz tili', code: 'RM' },
      { name: 'Fizika', code: 'LDN' },
    ];
  }
}
