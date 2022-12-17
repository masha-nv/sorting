import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { SortComponent } from './sort/sort.component';
import { QuicksortVisualizerComponent } from './quick-sort/quicksort-visualizer.component';
@NgModule({
  declarations: [
    AppComponent,
    BubbleSortComponent,
    InsertionSortComponent,
    SortComponent,
    QuicksortVisualizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
