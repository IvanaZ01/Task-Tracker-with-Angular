import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements 
OnInit {
  title = 'Task Tracker'
  showAddTask: boolean = false;
  subscription: Subscription|null = null;

  constructor(private uiService: UiService, private router: Router) {
    uiService.onToggle().subscribe(value=>{
      this.showAddTask = value
    })
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
