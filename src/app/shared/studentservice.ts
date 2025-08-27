import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Student {
  id: string;
  fullName: string;
  email: string;
  registerNo: string;
}

@Injectable({
  providedIn: 'root'
})
export class Studentservice {
  private apiUrl = 'http://localhost:5010/api/student'; 
  constructor(private http: HttpClient) {}
  getPendingStudents(): Observable<{ message: string, students: Student[] }> {
    return this.http.get<{ message: string, students: Student[] }>(`${this.apiUrl}/GetPendingStudents`);
  }

  // student-service.ts
  approveRejectStudents(userId: string, isApproved: boolean): Observable<{ message: string }> {
  return this.http.patch<{ message: string }>(
    `${this.apiUrl}/ApproveRejectStudents`,
    { userId, isApproved }
  );
}
}
