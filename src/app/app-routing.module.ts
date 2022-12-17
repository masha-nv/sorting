import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { QuicksortVisualizerComponent } from './quick-sort/quicksort-visualizer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bubble-sort'
  },
  {
    path: 'bubble-sort',
    component: BubbleSortComponent
  },
  {
    path: 'insertion-sort',
    component: InsertionSortComponent
  },
  {
    path: 'quick-sort',
    component: QuicksortVisualizerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
