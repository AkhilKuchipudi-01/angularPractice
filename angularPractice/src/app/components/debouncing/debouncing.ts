import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ToastService } from '../../services/toast.service';

/**
 * Product Interface: Defines the structure of an E-commerce item.
 */
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-debouncing',
  standalone: false,
  templateUrl: './debouncing.html',
  styleUrl: './debouncing.scss',
})
export class Debouncing implements OnInit {
  constructor(private toastService: ToastService) {}

  // MOCK DATA: 8 products for testing pagination
  products: Product[] = [
    { id: 1, name: 'iPhone 15 Pro', category: 'Electronics', price: 999, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400' },
    { id: 2, name: 'MacBook Air M2', category: 'Electronics', price: 1199, image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400' },
    { id: 3, name: 'Leather Jacket', category: 'Fashion', price: 199, image: 'https://images.unsplash.com/photo-1551028711-045cd328136b?w=400' },
    { id: 4, name: 'Running Shoes', category: 'Fashion', price: 89, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
    { id: 5, name: 'Mechanical Keyboard', category: 'Electronics', price: 150, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400' },
    { id: 6, name: 'Designer Handbag', category: 'Fashion', price: 450, image: 'https://images.unsplash.com/photo-1584917033904-49140d5c0663?w=400' },
    { id: 7, name: 'Wireless Earbuds', category: 'Electronics', price: 129, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400' },
    { id: 8, name: 'Smart Watch', category: 'Electronics', price: 299, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
  ];

  // 1. SEARCH & DEBOUNCING
  searchText: string = '';
  searchSubject = new Subject<string>();

  // 2. FILTERING
  activeCategory: string = 'All';
  categories: string[] = ['All', 'Electronics', 'Fashion'];

  // 3. PAGINATION
  currentPage: number = 1;
  pageSize: number = 4; // Show 4 items per page

  ngOnInit() {
    /**
     * EXAM CONCEPTS:
     * 1. debounceTime: Waits for a pause in typing (300ms).
     * 2. distinctUntilChanged: Won't search again if current search value = previous.
     */
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((searchValue) => {
      this.searchText = searchValue;
      this.currentPage = 1; // Reset to page 1 when searching
    });
  }

  onSearch(event: any) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
    this.currentPage = 1; // Reset to page 1 when filtering
  }

  // --- GETTERS ---

  get filteredProducts() {
    return this.products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.activeCategory === 'All' || p.category === this.activeCategory;
      return matchesSearch && matchesCategory;
    });
  }

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredProducts.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredProducts.length / this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.toastService.info(`Switched to page ${page}`, 2000);
    }
  }

  addToCart(product: Product) {
    this.toastService.success(`${product.name} added to cart!`);
  }
}
