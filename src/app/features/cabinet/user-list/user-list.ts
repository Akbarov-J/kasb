import { Component } from '@angular/core';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [Select, TableModule, CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  users = [
    {
      name: 'Ivan Temurov',
      class: '10 B',
      school: '222-maktab',
      profession: 'Data analyst',
    },
    {
      name: 'Temur Ivanov',
      class: '10 B',
      school: '222-maktab',
      profession: 'Developer',
    },
    {
      name: 'Alisher Uzoqov',
      class: '10 B',
      school: '222-maktab',
      profession: 'Musician',
    },
    {
      name: 'Jahongir Xolmatov',
      class: '10 B',
      school: '222-maktab',
      profession: 'Web designer',
    },
    {
      name: 'Anastasiya Rasulova',
      class: '10 B',
      school: '222-maktab',
      profession: 'Product manager',
    },
    {
      name: 'Iroda Diorova',
      class: '10 B',
      school: '222-maktab',
      profession: 'President',
    },
  ];
}
