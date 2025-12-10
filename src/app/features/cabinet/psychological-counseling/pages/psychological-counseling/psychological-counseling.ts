import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { Certificates } from '../../../../../shared/components/certificates/certificates';
import { UserList } from '../../../user-list/user-list';

@Component({
  selector: 'app-psychological-counseling',
  imports: [SelectButton, FormsModule, Certificates, UserList],
  templateUrl: './psychological-counseling.html',
  styleUrl: './psychological-counseling.scss',
})
export default class PsychologicalCounseling {
  selectedRole = signal<number>(1);

  stateOptions = signal<any>([
    { label: 'O‘quvchilar', value: 1 },
    { label: 'Murojaatlar', value: 2 },
  ]);
}
