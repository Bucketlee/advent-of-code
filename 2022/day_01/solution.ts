import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '/input.txt');
const text = fs.readFileSync(filePath);
const textByLine = text.toString().split('\n');

console.log(textByLine)

function part1(input: string[]): number {
  let maxValue = 0;
  input.reduce((sum: number, next: string) => {
    if (next === '') {
      if (maxValue < sum) {
        maxValue = sum;
      }
      return 0;
    }
    return sum + (+next);    
  }, 0);
  return maxValue;
}

console.log('Part 1 answer : ', part1(textByLine));

function part2(input: string[]): number {
  const sums: number[] = [];
  input.reduce((sum: number, next: string) => {
    if (next === '') {
      sums.push(sum);
      return 0;
    }
    return sum + (+next);
  }, 0);

  sums.sort((a, b) => b - a);

  return sums[0] + sums[1] + sums[2];
}

console.log('Part 2 answer : ', part2(textByLine));
