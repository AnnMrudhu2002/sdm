import { Component } from '@angular/core';
import { Sdmservice } from '../../shared/sdmservice';

@Component({
  selector: 'app-list-register-request',
  standalone: false,
  templateUrl: './list-register-request.html',
  styleUrl: './list-register-request.css'
})
export class ListRegisterRequest {
  students: any[] = [];
  message: string = '';

  constructor(private studentService: Sdmservice) {}

  ngOnInit(): void {
    this.loadPendingStudents();
  }

  loadPendingStudents(): void {
    this.studentService.getPendingStudents().subscribe({
      next: (res) => {
        console.log("API Response:", res); // 👀 Debug log
        this.message = res.message;
        this.students = res.students || [];   // ✅ Make sure it's assigned
        console.log("Students:", this.students); // 👀 Debug log
      },
      error: (err) => {
        console.error("Error fetching students:", err);
        this.message = 'Failed to load pending students';
      }
    });
  }
}
