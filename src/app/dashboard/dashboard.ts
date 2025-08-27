import { Component } from '@angular/core';
import { Sdmservice } from '../shared/sdmservice';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  pendingStudents: number = 0;
  approvedStudents: number = 0;

  constructor(private dashboardService: Sdmservice) {}

  ngOnInit(): void {
    this.dashboardService.getSummary().subscribe({
      next: (data) => {
        this.pendingStudents = data.pendingStudents;
        this.approvedStudents = data.approvedStudents;
      },
      error: (err) => {
        console.error('Error loading dashboard summary', err);
      }
    });
  }
}
