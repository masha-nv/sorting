export function generateRandomNumbers(min:number, max:number, size: number) {
    const randomNumbers = [];

    for (let i = 0; i<size; i++) {
        randomNumbers.push(Math.floor(Math.random()*(max-min+1) + min))
    }

    return randomNumbers;
}