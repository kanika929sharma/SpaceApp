import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlHandlerService {

  constructor(private httpClient: HttpClient) { }

  fetchSpaceLaunchData(qString): Observable<any>{
    const url = 'https://api.spaceXdata.com/v3/launches?' + qString;
    return this.httpClient.get<any>(url);
  }
}
