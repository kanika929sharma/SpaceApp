import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { UrlHandlerService } from 'src/app/url-handler.service';

@Component({
  selector: 'app-space-launch-filter',
  templateUrl: './space-launch-filter.component.html',
  styleUrls: ['./space-launch-filter.component.css']
})
export class SpaceLaunchFilterComponent implements OnInit, OnDestroy {
  yearValue = new Map();
  successfulLaunchVal = new Map();
  successfulLandVal = new Map();
  selectedSuccLaunchVal = '';
  selectedSuccLandingVal = '';
  selectedYear = '';
  fetchSpaceLaunchResultSubs: Subscription;
  spaceLaunchData = [];
  @Output() spaceLaunchDataEmitter = new EventEmitter<any>();
  constructor(private urlHandlerService: UrlHandlerService){}
  ngOnInit(): void{
    for ( let i = 2006; i <= 2020; i++){
      this.yearValue.set(i, false);
    }
    this.successfulLaunchVal.set('True', false);
    this.successfulLaunchVal.set('False', false);
    this.successfulLandVal.set('True', false);
    this.successfulLandVal.set('False', false);
    const qString = this.createQSTring();
    this.fetchSpaceLaunchResult(qString);
  }

  ngOnDestroy(): void {
    if (this.fetchSpaceLaunchResultSubs) {
      this.fetchSpaceLaunchResultSubs.unsubscribe();
    }
  }

  toggleValue(event, attributeToToggle, selectedElememt): void{
    if (this[selectedElememt]) {
      this[attributeToToggle].set(this[selectedElememt], !this[attributeToToggle].get(this[selectedElememt]));
      this[selectedElememt] = '';
    }
    this[attributeToToggle].set(event.key, !event.value);
    if (!event.value) {
      this[selectedElememt] = event.key;
    }
    const qString = this.createQSTring();
    this.fetchSpaceLaunchResult(qString);
  }

  asIsOrder(a, b): number {
    return 1;
  }

  createQSTring(): string {
    let qString = 'limit=100&';
    if (this.selectedSuccLaunchVal !== '') {
      qString += 'launch_success=' + this.selectedSuccLaunchVal.toLowerCase() + '&';
    }
    if (this.selectedSuccLandingVal !== '') {
      qString += 'land_success=' + this.selectedSuccLandingVal.toLowerCase() + '&';
    }
    if (this.selectedYear) {
      qString += 'launch_year=' + this.selectedYear + '&';
    }
    console.log('qstring', qString.substring(0, qString.length - 1));
    return qString.substring(0, qString.length - 1);
  }

  fetchSpaceLaunchResult(qString): void {
    this.fetchSpaceLaunchResultSubs = this.urlHandlerService.fetchSpaceLaunchData(qString).subscribe((data) => {
      this.spaceLaunchData = data;
      this.spaceLaunchDataEmitter.emit(this.spaceLaunchData);
    },
    (error) => {
      throwError('Error fetching data from server');
    });
  }
}
