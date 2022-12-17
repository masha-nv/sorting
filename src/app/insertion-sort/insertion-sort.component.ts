import { Component, OnInit } from '@angular/core';
import { generateRandomNumbers } from '../utility';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.scss']
})
export class InsertionSortComponent implements OnInit {
  numbers: number[] = [];
  numberBeingChanged: number = -1;

  constructor() { }

  ngOnInit(): void {
   this.numbers = generateRandomNumbers(1, 30, 20)
  }

  generateNewNumbers():void {
    this.numbers=generateRandomNumbers(1,30, 20)
  }

  setClassForNumber(num: number) {
    if (num === this.numberBeingChanged) {
      return {
        changing: true
      }
    }
    return {};
  }

  async sort() {
    for (let i = 1; i<this.numbers.length; i++) {
      const current = this.numbers[i];
      let j = i-1;
      while (j>=0 && this.numbers[j]>current) {
        this.numbers[j+1] = this.numbers[j];
        this.numberBeingChanged = this.numbers[j];
        await new Promise(resolve => setTimeout(resolve, 100))
        j--;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
      this.numberBeingChanged = -1;
      this.numbers[j+1] = current;
    }
  }

}
