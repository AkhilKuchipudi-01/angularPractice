import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  navItems = [
    { icon: '📝', label: 'Todo', route: '/todo' },
    { icon: '⏳', label: 'Debouncing', route: '/debouncing' },
    { icon: '🏗️', label: 'Carousel', route: '/carousel' },
    { icon: '🌦️', label: 'Weather', route: '/weather' },
    { icon: '🌡️', label: 'Simple Weather', route: '/simple-weather' },
  ];

}

