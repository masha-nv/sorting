import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Output('sort')
  sort = new EventEmitter()

  @Output('generateNewNumbers')
  generateNewNumbers = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  generateNew(){
  }

}
