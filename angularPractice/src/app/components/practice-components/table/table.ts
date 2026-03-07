import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  activities = [
    {
      action: 'Subscription Renewal',
      user: 'John Doe',
      status: 'Paid',
      progress: 100,
      date: 'Oct 24, 2023',
      amount: '$599.00',
      statusClass: 'status-paid',
      progressClass: 'progress-success'
    },
    {
      action: 'New Signup',
      user: 'Sarah Smith',
      status: 'Pending',
      progress: 45,
      date: 'Oct 24, 2023',
      amount: '$0.00',
      statusClass: 'status-pending',
      progressClass: 'progress-info'
    },
    {
      action: 'API Upgrade',
      user: 'Tech Corp',
      status: 'Paid',
      progress: 80,
      date: 'Oct 23, 2023',
      amount: '$1,200.00',
      statusClass: 'status-paid',
      progressClass: 'progress-info'
    },
    {
      action: 'Refund Issued',
      user: 'Mike Jones',
      status: 'Refunded',
      progress: 100,
      date: 'Oct 22, 2023',
      amount: '-$49.00',
      statusClass: 'status-refunded',
      progressClass: 'progress-danger'
    }
  ];
}

