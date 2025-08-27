import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterRequest, Sdmservice } from '../../shared/sdmservice';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerRequest: RegisterRequest = {
    fullName: '',
    registerNo: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  loading: boolean = false; // spinner

  constructor(
    private sdmService: Sdmservice,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    if (this.registerRequest.password !== this.registerRequest.confirmPassword) {
      this.toastr.error("Passwords do not match", "Error");
      return;
    }

    this.loading = true;

    this.sdmService.register(this.registerRequest).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.toastr.success("Registration successful!", "Success", {
          positionClass: 'toast-top-right'
        });
        
        this.toastr.error("Registration failed", "Error", {
          positionClass: 'toast-top-right'
        });
        
        // optionally reset form
        this.registerRequest = {
          fullName: '',
          registerNo: '',
          email: '',
          password: '',
          confirmPassword: ''
        };
      },
      error: (err: any) => {
        this.loading = false;
        const msg = err?.error?.message || "Registration failed. Please try again.";
        this.toastr.error(msg, "Error");
        console.error(err);
      }
    });
  }
}
