import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '/input.txt');
const text = fs.readFileSync(filePath);
const textByLine = text.toString().split('\n');

console.log(textByLine)

function solution(input: string[]) {
}

console.log(solution(textByLine));
