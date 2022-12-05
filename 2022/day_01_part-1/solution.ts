import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '/input.txt');
const text = fs.readFileSync(filePath);
const textByLine = text.toString().split('\n');

console.log(textByLine)

function solution(input: string[]): number {
  let maxValue = 0;
  input.reduce((sum: number, next: string) => {
    if (next === '') {
      if (maxValue < sum) {
        maxValue = sum;
      }
      return 0;
    }
    return sum + (+next);    
  }, 0)
  return maxValue;
}

console.log(solution(textByLine));
