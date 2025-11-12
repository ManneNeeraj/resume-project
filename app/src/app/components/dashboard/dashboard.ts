import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, HttpClientModule, RouterModule],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  
})
export class Dashboard implements OnInit {
usersExist = false;
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Example: call backend to know whether any user exists.
    // Adjust URL to your actual backend route.
    this.http.get<{exists: boolean}>('/api/users/exists')
      .subscribe({
        next: res => {
          this.usersExist = !!res.exists;
          this.loading = false;
        },
        error: err => {
          console.error('Could not check users existence', err);
          // fallback: treat as no users so app suggests signup
          this.usersExist = false;
          this.loading = false;
        }
      });
  }
}
