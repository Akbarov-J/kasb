import { Component } from '@angular/core';
import { IInfo, InfoBlock } from '../../components/info-block/info-block';
import { PsychologistAdvice } from '../../components/psychologist-advice/psychologist-advice';

@Component({
  selector: 'app-profile',
  imports: [InfoBlock, PsychologistAdvice],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export default class Profile {
  personalInformations: IInfo[] = [];
  educationInformations: IInfo[] = [];
  questionnaireInformations: IInfo[] = [];

  ngOnInit() {
    this.mappingPersonalInfo();
    this.mappingEducationInfo();
    this.mappingQuestionnaireInfo();
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
  mappingEducationInfo() {
    this.educationInformations = [
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
        value: '11-maktab',
      },
      {
        title: 'Sinf:',
        value: '9A-sinf',
      },
    ];
  }
  mappingQuestionnaireInfo() {
    this.questionnaireInformations = [
      {
        title: 'Maktabdan keyingi manzil:',
        value: 'Toshkent Axborot Texnologiyalari Universiteti',
      },
      {
        title: 'Sizni qiziqtirgan kasb:',
        value: 'Dasturchilik',
      },
      {
        title: 'Sizning sevimli mashg‘ulotingiz:',
        value: 'Kompyuter o‘yinlari',
      },
    ];
  }
}
