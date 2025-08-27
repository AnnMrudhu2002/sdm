import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  fullName: string;
  registerNo: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  userId?: string;
  message?: string;
}
export interface Student {
  fullName: string;
  email: string;
  registerNo: string;
}

@Injectable({
  providedIn: 'root'
})
export class Sdmservice {
  private baseUrl = 'http://localhost:5010/api'; // Change if needed

  constructor(private http: HttpClient) {}

  register(request: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/Authentication/Register`, request);
  }
  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/Authentication/login`, request);
  }
  getSummary(): Observable<any> {
    return this.http.get(`${this.baseUrl}/AdminDashboard/summary`);
  }
  getPendingStudents(): Observable<{ message: string, students: Student[] }> {
    return this.http.get<{ message: string, students: Student[] }>(`${this.baseUrl}/Student/GetPendingStudents`);
  }
}
