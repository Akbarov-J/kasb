import { Component } from '@angular/core';
import { IInfo, InfoBlock } from '../../components/info-block/info-block';

@Component({
  selector: 'app-profile-director',
  imports: [InfoBlock],
  templateUrl: './profile-director.html',
  styleUrl: './profile-director.scss',
})
export default class ProfileDirector {
  personalInformations: IInfo[] = [];
  qualificationInformations: IInfo[] = [];
  workInformations: IInfo[] = [];

  ngOnInit() {
    this.mappingPersonalInfo();
    this.mappingQualificationInfo();
    this.mappingWorkInfo();
  }

  mappingPersonalInfo() {
    this.personalInformations = [
      {
        title: 'FISH:',
        value: 'Shodiyeva Asal',
      },
      {
        title: "Tug'ilgan sana:",
        value: '01.01.1999',
      },
      {
        title: 'Telefon:',
        value: '+998(99) 999-99-99',
      },
    ];
  }
  mappingQualificationInfo() {
    this.qualificationInformations = [
      {
        title: 'Nizomiy unsti:',
        value: 'Oliy',
      },
      {
        title: 'Tugatgan yili:',
        value: '01.01.2025',
      },
    ];
  }
  mappingWorkInfo() {
    this.workInformations = [
      {
        title: 'Viloyat:',
        value: 'Toshkent viloyati',
      },
      {
        title: 'Shahar:',
        value: 'Toshkent shahri',
      },
      {
        title: 'Maktab:',
        value: '111-maktab',
      },
    ];
  }
}
