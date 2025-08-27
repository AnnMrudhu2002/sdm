import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRequest, Sdmservice } from '../../shared/sdmservice';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginRequest: LoginRequest = {
    email: '',
    password: ''
  };

  loading: boolean = false;

  constructor(
    private authService: Sdmservice,
    private toastr: ToastrService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.loading = true;

    this.authService.login(this.loginRequest).subscribe({
      next: (res: any) => {
        this.loading = false;

        // Show success message
        this.toastr.success('Login successful', 'Success', {
          positionClass: 'toast-top-right'
        });

        // Save everything from the response to localStorage
        localStorage.setItem('token', res.token || '');
        localStorage.setItem('userId', res.id || '');
        localStorage.setItem('userName', res.userName || '');
        localStorage.setItem('email', res.email || '');
        localStorage.setItem('registerNo', res.registerNo || '');
        localStorage.setItem('roles', JSON.stringify(res.roles || []));

        // Navigate based on role
        if (res.roles.includes('Admin')) {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/student/dashboard']); // or wherever student should go
        }
      },
      error: (err: any) => {
        this.loading = false;
        const msg = err?.error?.message || 'Login failed. Please try again.';
        this.toastr.error(msg, 'Error', { positionClass: 'toast-top-right' });
      }
    });
  }
}
