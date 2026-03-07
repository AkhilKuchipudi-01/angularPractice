import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-responsive',
  standalone: false,
  templateUrl: './mobile-responsive.html',
  styleUrl: './mobile-responsive.scss',
})
export class MobileResponsive {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

