import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularPractice');
  // users = [
  //   { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin' },
  //   { id: 2, name: 'Bob Jones', email: 'bob@example.com', role: 'User' },
  //   { id: 3, name: 'Charlie Day', email: 'charlie@example.com', role: 'Editor' }
  // ];
}
