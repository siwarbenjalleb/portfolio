import { Injectable } from '@angular/core';
import { Experience, SkillCategory, NavLink } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getNavLinks(): NavLink[] {
    return [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        role: 'Full Stack Developer',
        company: 'INFOTIKE',
        location: 'Tunis, Tunisia',
        period: 'Jan 2025 – Present',
        type: 'full-time',
        projects: [
          {
            name: 'Web Application Development',
            bullets: [
              'Developed and maintained web applications using Spring Boot and React.js.',
              'Integrated REST APIs and managed MySQL databases for scalable data handling.',
              'Collaborated in Agile teams using Git and Trello for effective project tracking.',
              'Contributed to building scalable and high-performance solutions.',
            ],
          },
        ],
        skills: ['Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'Git', 'Trello', 'Agile'],
      },
      {
        role: 'Full Stack Developer Intern',
        company: 'Billcom Consulting',
        location: 'Tunis, Tunisia',
        period: 'Feb 2024 – Jul 2024',
        type: 'intern',
        projects: [
          {
            name: 'After-Sales Service (SAV) Web Application',
            bullets: [
              'Designed and developed a web-based after-sales service (SAV) application from scratch.',
              'Built an admin platform to manage and track customer service requests efficiently.',
              'Integrated Spring Boot backend with a React.js frontend and MySQL database.',
              'Used Trello for Agile task management throughout the development lifecycle.',
            ],
          },
        ],
        skills: ['Spring Boot', 'React.js', 'MySQL', 'Trello'],
      },
      {
        role: 'Embedded Systems Intern',
        company: 'Capgemini Engineering',
        location: 'Tunis, Tunisia',
        period: 'Jul 2023',
        type: 'intern',
        projects: [
          {
            name: 'Wireless Battery Monitoring System',
            bullets: [
              'Developed a wireless battery monitoring system using STM32 and ESP32 microcontrollers.',
              'Established communication between STM32 and ESP32 using AT commands over UART.',
              'Monitored key battery metrics including voltage, current, charge level, and health status.',
              'Used Jira for task tracking and project management throughout the internship.',
            ],
          },
        ],
        skills: ['STM32', 'ESP32', 'C/C++', 'AT Commands', 'UART', 'Jira'],
      },
    ];
  }

  getSkillCategories(): SkillCategory[] { return []; }
  getSkillIconUrl(icon: string): string { return ''; }
}
