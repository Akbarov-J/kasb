import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Select, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  selectedLang = 1;

  languages = [
    {
      id: 1,
      name: 'Uz',
    },
    {
      id: 2,
      name: 'Ru',
    },
    {
      id: 3,
      name: 'Eng',
    },
  ];
}
