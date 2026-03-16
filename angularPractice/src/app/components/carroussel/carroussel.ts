import { Component } from '@angular/core';

@Component({
  selector: 'app-carroussel',
  standalone: false,
  templateUrl: './carroussel.html',
  styleUrl: './carroussel.scss',
})
export class Carroussel {
  images = [
    { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80', title: 'Mountain Lake', description: 'A beautiful landscape with mountains and a lake.' },
    { url: 'https://images.unsplash.com/photo-1469474968028-56621f02e42e?w=800&q=80', title: 'Nature Trails', description: 'Exploring the green trails in the valley.' },
    { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', title: 'Forest Deep', description: 'Sunlight filtering through the dense forest canopy.' }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  setSlide(index: number) {
    this.currentIndex = index;
  }
}

