import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '/input.txt');
const text = fs.readFileSync(filePath);
const textByLine = text.toString().split('\n');

console.log(textByLine)

function part1(input: string[]) {
}

console.log('Part 1 answer : ', part1(textByLine));

function part2(input: string[]) {
}

console.log('Part 2 answer : ', part2(textByLine));
