import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  text: string = '';
  dayTime: string = '';
  reminder:boolean = false
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  showAddTask:boolean = false

  constructor(private uiService: UiService) { 
    uiService.onToggle().subscribe(value=>{
      this.showAddTask = value
    })
  }

  ngOnInit(): void {
  }



  onSubmit(){
    if(!this.text){
      alert('Please add some text');
      return
    }

    const newTask: Task = {
      text: this.text,
      day: this.dayTime,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text = ''
    this.dayTime = ''
    this.reminder = false
  }
}
