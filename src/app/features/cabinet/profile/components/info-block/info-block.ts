import { Component, input } from '@angular/core';

export interface IInfo {
  title: string;
  value: string;
}

@Component({
  selector: 'app-info-block',
  imports: [],
  templateUrl: './info-block.html',
  styleUrl: './info-block.scss',
})
export class InfoBlock {
  title = input<string>('');
  informations = input.required<IInfo[]>();
}
