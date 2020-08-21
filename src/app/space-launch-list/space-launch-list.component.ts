import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-space-launch-list',
  templateUrl: './space-launch-list.component.html',
  styleUrls: ['./space-launch-list.component.css']
})
export class SpaceLaunchListComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() spaceLaunchData = [];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.spaceLaunchData) {
      this.spaceLaunchData = changes.spaceLaunchData.currentValue ? changes.spaceLaunchData.currentValue : [];
    }
  }
}
