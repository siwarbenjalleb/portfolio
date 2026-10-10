import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill { name: string; icon: string; }
interface SkillCategory { label: string; index: string; skills: Skill[]; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    { label: 'Languages', index: '01', skills: [
      { name: 'Java',       icon: 'https://img.icons8.com/?size=48&id=GPfHz0SM85FX&format=png&color=ffffff' },
      { name: 'Python',     icon: 'https://img.icons8.com/?size=48&id=13441&format=png&color=ffffff' },
      { name: 'JavaScript', icon: 'https://img.icons8.com/?size=48&id=108784&format=png' },
      { name: 'C++',        icon: 'https://img.icons8.com/?size=48&id=40670&format=png' },
      { name: 'C',          icon: 'https://img.icons8.com/?size=48&id=shQTXiDQiQVR&format=png' },
      { name: 'HTML/CSS',   icon: 'https://img.icons8.com/?size=48&id=20909&format=png' },
    ]},
    { label: 'Frameworks & Libraries', index: '02', skills: [
      { name: 'Spring Boot', icon: 'https://img.icons8.com/?size=48&id=90519&format=png' },
      { name: 'React.js',    icon: 'https://img.icons8.com/?size=48&id=asWSSTBrDlTW&format=png' },
      { name: 'Angular',     icon: 'https://img.icons8.com/?size=48&id=6SWtW8hxZWSo&format=png' },
      { name: 'Node.js',     icon: 'https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png' },
      { name: 'Express.js',  icon: 'https://img.icons8.com/?size=48&id=kg46nzoJrmTR&format=png' },
      { name: 'Bootstrap',   icon: 'https://img.icons8.com/?size=48&id=EzPCiQUqWWEa&format=png' },
    ]},
    { label: 'Cloud & DevOps', index: '03', skills: [
      { name: 'AWS',        icon: 'https://img.icons8.com/?size=48&id=33039&format=png' },
      { name: 'Docker',     icon: 'https://img.icons8.com/?size=48&id=cdYUlRaag9G9&format=png' },
      { name: 'Kubernetes', icon: 'https://img.icons8.com/?size=48&id=cvzmaEA4kC0o&format=png' },
      { name: 'Terraform',  icon: 'https://img.icons8.com/?size=48&id=kEkT1u9q2Pc4&format=png' },
      { name: 'Ansible',    icon: 'https://img.icons8.com/?size=48&id=KnBi7yvpJbvK&format=png' },
      { name: 'Linux',      icon: 'https://img.icons8.com/?size=48&id=17842&format=png' },
    ]},
    { label: 'Databases', index: '04', skills: [
      { name: 'MySQL',      icon: 'https://img.icons8.com/?size=48&id=9nLaR5KFGjN0&format=png' },
      { name: 'SQL',        icon: 'https://img.icons8.com/?size=48&id=1476&format=png' },
    ]},
  ];
}
