import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    id: undefined,
    text: '',
    day: '',
    reminder: false,
  };
  faTimes = faTimes;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleReminder = new EventEmitter<Task>()

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task)
  }
}
