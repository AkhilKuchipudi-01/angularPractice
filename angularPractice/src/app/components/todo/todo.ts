import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

/**
 * Task Interface: Defines the structure of a Todo item.
 * Interfaces are great for Type Safety in TypeScript.
 */
interface Task {
  id: number;
  title: string;
  completed: boolean;
  isEditing?: boolean; // Optional property to handle inline editing
}

@Component({
  selector: 'app-todo',
  standalone: false, // Using NgModule based approach
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  private messageService = inject(MessageService);
  // 1. STATE: These variables hold the data for our component.
  tasks: Task[] = [
    { id: 1, title: 'Learn Angular Directives', completed: true },
    { id: 2, title: 'Understand CRUD Operations', completed: false },
  ];

  newTaskTitle = ''; // Used for two-way binding [(ngModel)]

  show() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  /**
   * CREATE: Adds a new task to the list.
   * Concept: Data Binding and Array Modification.
   */
  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(), // Unique ID using timestamp
        title: this.newTaskTitle,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTaskTitle = ''; // Reset the input field
    }
  }

  /**
   * DELETE: Removes a task by its ID.
   * Concept: Array filtering.
   */
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  /**
   * UPDATE: Toggles the completion status of a task.
   * Concept: Event handling and property updates.
   */
  toggleComplete(task: Task) {
    task.completed = !task.completed;
  }

  /**
   * UPDATE (Edit): Enables editing mode for a specific task.
   */
  editTask(task: Task) {
    task.isEditing = true;
  }

  /**
   * UPDATE (Save): Saves the edited title and exits edit mode.
   */
  saveTask(task: Task) {
    task.isEditing = false;
  }

  /**
   * READ: In Angular, we usually just loop through the 'tasks' array 
   * in the HTML using the *ngFor directive.
   */
}

