// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg">
      <div class="container">
        <h1>Welcome to CineMatch!</h1>
        <p>Please enter your Letterboxd/IMDB username to get movie recommendations.</p>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" [(ngModel)]="username" class="form-control">
        </div>
        <button (click)="getMovieRecommendations()" class="btn btn-primary">Get Recommendations</button>

        <div class="movie-list" *ngIf="recommendations.length > 0">
          <h2>Movie Recommendations for {{ username }}:</h2>
          <div class="movie" *ngFor="let movie of recommendations">
            <img [src]="movie.imageUrl" alt="{{ movie.title }}">
            <h3>{{ movie.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  recommendations: Movie[] = [];

  getMovieRecommendations() {
    // Simulate API call to fetch movie recommendations based on the username
    // Replace this with your actual API call implementation
    // For demonstration purposes, we'll use a sample set of movies
    this.recommendations = [
      { title: 'BeetleJuice', imageUrl: 'assets/images/movie1.jpg' },
      { title: 'BladeRunner', imageUrl: 'assets/images/movie2.jpg' },
      { title: 'Friday 13th', imageUrl: 'assets/images/movie3.jpg' },
      { title: 'Pulp Fiction', imageUrl: 'assets/images/movie4.jpg' },
    ];
  }
}

interface Movie {
  title: string;
  imageUrl: string;
}
