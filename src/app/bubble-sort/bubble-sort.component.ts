import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Output } from "@angular/core";
import { EventEmitter } from "stream";
import { generateRandomNumbers } from "../utility";

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss'],
  animations: [
    trigger('elementState', [
      state('highlighted', style({
        backgroundColor: 'lightpink'
      })),
      state('normal', style({
        backgroundColor: 'lightblue'
      })),
      transition('normal=>highlighted', animate('100ms ease-in')),
      transition('highlighted=>normal', animate('100ms ease-out'))
    ])
  ]
})

export class BubbleSortComponent {
  @Output('sort')
  sort: any;

  numbers: number[] = [];
  highlightedNumber: number = -1;

  ngOnInit(): void {
    this.numbers = generateRandomNumbers(1, 30, 20)
    
  }

  generateNewNumbers():void {
    this.numbers=generateRandomNumbers(1,30, 20)
  }

  elementState(num: number) {
    if (num === this.highlightedNumber) {
      return 'highlighted'
    }
    return 'normal'
  }

  async bubbleSort() {
    console.log('emitted')
    for (let i = 1; i<this.numbers.length; i++) {
      for (let j = 0; j<this.numbers.length-i; j++) {
        this.highlightedNumber = this.numbers[j];
        await new Promise(resolve => setTimeout(resolve, 10));
        if (this.numbers[j] > this.numbers[j+1]) {
          [this.numbers[j], this.numbers[j+1]] = [this.numbers[j+1], this.numbers[j]]
        }
      }
      await new Promise(resolve => setTimeout(resolve, this.numbers.length*10));
      this.highlightedNumber = -1;
    }
  }

}