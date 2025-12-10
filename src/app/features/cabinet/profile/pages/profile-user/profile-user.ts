import { Component } from '@angular/core';
import { IInfo, InfoBlock } from '../../components/info-block/info-block';
import { PsychologistAdvice } from '../../components/psychologist-advice/psychologist-advice';
import { MyChildren } from '../../components/my-children/my-children';

@Component({
  selector: 'app-profile-user',
  imports: [InfoBlock, PsychologistAdvice, MyChildren],
  templateUrl: './profile-user.html',
  styleUrl: './profile-user.scss',
})
export default class ProfileUser {
  personalInformations: IInfo[] = [];
  educationInformations: IInfo[] = [];
  questionnaireInformations: IInfo[] = [];

  ngOnInit() {
    this.mappingPersonalInfo();
  }

  mappingPersonalInfo() {
    this.personalInformations = [
      {
        title: 'FISH:',
        value: 'Ishanxanov Ayyubxon',
      },
      {
        title: 'Tug‘ilgan sana:',
        value: '01.01.1999',
      },
      {
        title: 'Telefon:',
        value: '+998(99) 999-99-99',
      },
    ];
  }
}
