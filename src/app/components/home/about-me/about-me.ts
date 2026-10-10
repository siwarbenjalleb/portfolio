import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMeComponent {
  certifications = [
    { name: 'Engineering Degree — Cloud Computing & Cybersecurity', issuer: 'ESPRIT', year: 'In Progress' },
    { name: "Bachelor's in Computer Engineering (IoT & Embedded Systems)", issuer: 'FST', year: '2024' },
  ];

  stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '3+', label: 'Projects Delivered' },
    { value: '4', label: 'Languages Spoken' },
    { value: '2', label: 'Degrees' },
  ];
}
