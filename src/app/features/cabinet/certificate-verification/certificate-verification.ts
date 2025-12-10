import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificate-verification',
  imports: [InputNumberModule, Select, TableModule, CommonModule, FormsModule],
  templateUrl: './certificate-verification.html',
  styleUrl: './certificate-verification.scss',
  standalone: true,
})
export class CertificateVerification {
  searchText: string = '';
  selectedClass: string | null = null;

  classOptions = [
    { label: '9 A', value: '9 A' },
    { label: '9 B', value: '9 B' },
    { label: '10 A', value: '10 A' },
    { label: '10 B', value: '10 B' },
    { label: '11 A', value: '11 A' },
    { label: '11 B', value: '11 B' },
  ];

  certificates = [
    {
      name: 'Ivan Temurov',
      class: '10 B',
      school: '222-maktab',
      profession: 'Data analyst',
      rating: 3,
    },
    {
      name: 'Temur Ivanov',
      class: '10 B',
      school: '222-maktab',
      profession: 'Developer',
      rating: 3,
    },
    {
      name: 'Alisher Uzoqov',
      class: '10 B',
      school: '222-maktab',
      profession: 'Musician',
      rating: 3,
    },
    {
      name: 'Jahongir Xolmatov',
      class: '10 B',
      school: '222-maktab',
      profession: 'Web designer',
      rating: 3,
    },
    {
      name: 'Anastasiya Rasulova',
      class: '10 B',
      school: '222-maktab',
      profession: 'Product manager',
      rating: 3,
    },
    {
      name: 'Iroda Diorova',
      class: '10 B',
      school: '222-maktab',
      profession: 'President',
      rating: 3,
    },
  ];

  filteredCertificates = [...this.certificates];

  ngOnInit() {
    this.filterCertificates();
  }

  filterCertificates() {
    this.filteredCertificates = this.certificates.filter(cert => {
      const matchesSearch = !this.searchText ||
        cert.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        cert.school.toLowerCase().includes(this.searchText.toLowerCase()) ||
        cert.profession.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesClass = !this.selectedClass || cert.class === this.selectedClass;

      return matchesSearch && matchesClass;
    });
  }
}

export default CertificateVerification;
