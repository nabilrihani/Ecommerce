import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
interface Project {
  title: string;
  client: string;
  description: string;
  budget: number;
}

interface Freelancer {
  name: string;
  skills: string[];
  rate: number;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  projects: Project[] = [
    { title: 'Développement d\'une application', client: 'Client A', description: 'Application mobile pour la gestion des tâches', budget: 5000 },
    { title: 'Création d\'un site web', client: 'Client B', description: 'Site web e-commerce', budget: 3000 },
  ];

  freelancers: Freelancer[] = [
    { name: 'Alice', skills: ['JavaScript', 'Angular'], rate: 50 },
    { name: 'Bob', skills: ['Python', 'Django'], rate: 40 },
  ];

  displayedColumns: string[] = ['name', 'skills', 'rate'];
}
