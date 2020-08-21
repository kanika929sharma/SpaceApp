import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceLaunchListComponent } from './space-launch-list/space-launch-list.component';
import { SpaceLaunchFilterComponent } from './space-launch-filter/space-launch-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceLaunchListComponent,
    SpaceLaunchFilterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
