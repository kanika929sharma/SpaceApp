import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  spaceLaunchData = [];
  title = 'spaceApp';
  ngOnInit(): void {
  }
  onSpaceLaunchDataEmit(event): void{
    this.spaceLaunchData = event;
  }
}
