import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { Toast, ToastType } from '../../services/toast.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: false,
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class ToastComponent implements OnInit {
  toasts$: Observable<Toast[]>;

  constructor(private toastService: ToastService) {
    this.toasts$ = this.toastService.getToasts();
  }

  ngOnInit(): void {
  }

  remove(id: string) {
    this.toastService.remove(id);
  }

  getIcon(type: ToastType): string {
    switch (type) {
      case 'success':
        return 'pi pi-check-circle';
      case 'error':
        return 'pi pi-times-circle';
      case 'warning':
        return 'pi pi-exclamation-circle';
      case 'info':
        return 'pi pi-info-circle';
      default:
        return 'pi pi-info-circle';
    }
  }
}

