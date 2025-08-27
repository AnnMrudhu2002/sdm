import { Component } from '@angular/core';
import { Sdmservice } from '../../shared/sdmservice';
import { Student, Studentservice } from '../../shared/studentservice';

@Component({
  selector: 'app-list-register-request',
  standalone: false,
  templateUrl: './list-register-request.html',
  styleUrl: './list-register-request.css'
})
export class ListRegisterRequest {
  students: Student[] = [];
  message: string = '';

  constructor(private studentService: Studentservice) {}

  ngOnInit(): void {
    this.loadPendingStudents();
  }

  loadPendingStudents(): void {
    this.studentService.getPendingStudents().subscribe({
      next: (res) => {
        console.log("API Response:", res);
        this.message = res.message;

        // 🔧 Force proper array
        this.students = res.students ? [...res.students] : [];

        console.log("Students after fix:", this.students, "Length:", this.students.length);
      },
      error: (err) => {
        console.error("Error fetching students:", err);
        this.message = 'Failed to load pending students';
      }
    });
  }

  // studentrequest.ts
approveRejectStudent(userId: string, isApproved: boolean): void {
  this.studentService.approveRejectStudents(userId, isApproved).subscribe({
    next: (res) => {
      this.message = res.message;
      // Reload the list after action
      this.loadPendingStudents();
    },
    error: (err) => {
      console.error("Error updating student status:", err);
      this.message = 'Failed to update student status';
    }
  });
}
}
