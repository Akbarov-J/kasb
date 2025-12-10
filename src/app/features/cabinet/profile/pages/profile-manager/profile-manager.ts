import { Component } from '@angular/core';
import { IInfo, InfoBlock } from '../../components/info-block/info-block';

@Component({
  selector: 'app-profile-manager',
  imports: [InfoBlock],
  templateUrl: './profile-manager.html',
  styleUrl: './profile-manager.scss',
})
export default class ProfileManager {
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
        value: 'Ishanxanov Abror',
      },
      {
        title: "Tug'ilgan sana:",
        value: '15.03.1985',
      },
      {
        title: 'Telefon:',
        value: '+998(90) 123-45-67',
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
        value: '01.06.2007',
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
        value: '222-maktab',
      },
    ];
  }
}
