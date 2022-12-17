import { Component, OnInit } from '@angular/core';
import { generateRandomNumbers } from '../utility';

@Component({
  selector: 'app-quicksort-visualizer',
  templateUrl: './quicksort-visualizer.component.html',
  styleUrls: ['./quicksort-visualizer.component.scss']
})
export class QuicksortVisualizerComponent implements OnInit {
  pivotIdx: number = -1;
  // Declare an array to hold the data that we want to sort
  public data: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.reset()
  }

  reset() {
    // Initialize the data array with some random values
    this.data = generateRandomNumbers(5, 20, 30);
  }

  // This function will be called when the user clicks the "Sort" button
  public async sort(): Promise<void> {
    await this.quicksort(this.data, 0, this.data.length - 1);
  }
  

  // The quicksort function takes in a left and right index, and sorts the data array between those indices
  private async quicksort(data: number[], left: number, right: number): Promise<void> {
    // Base case: If the left index is greater than or equal to the right index, then the array is already sorted
    if (left >= right) {
      return;
    }
  
    // Choose a pivot value, and partition the data array around it
    this.pivotIdx = Math.floor((left + right) / 2)
    const pivot = data[this.pivotIdx];
    data[this.pivotIdx]

    const partitionIndex = this.partition(data, left, right, pivot);
  
    // Recursively sort the left and right halves of the partitioned array, with a delay to allow the animation to be visible
    await this.delay(1000);
    this.quicksort(data, left, partitionIndex - 1);
    await this.delay(1000);
    this.quicksort(data, partitionIndex, right);
  }
  
  // This function delays the execution of the quicksort function by a specified number of milliseconds
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  

  // This function partitions the data array around the pivot value, and returns the index of the pivot
  private partition(data: number[], left: number, right: number, pivot: number): number {
    while (left <= right) {
      // Find the next value on the left that should be swapped
      while (data[left] < pivot) {
        left++;
      }

      // Find the next value on the right that should be swapped
      while (data[right] > pivot) {
        right--;
      }

      // If the left index is still less than or equal to the right index, then swap the values
      if (left <= right) {
        [data[left], data[right]] = [data[right], data[left]];
        left++;
        right--;
      }
    }

    // Return the final position of the pivot
    return left;
  }
}
