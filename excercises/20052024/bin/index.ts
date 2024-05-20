import { fixInvertedPunc } from '../src';

const input1 = 'Feliz cumpleaños!';
const output1 = fixInvertedPunc(input1);
console.log(output1); // ¡Feliz cumpleaños!

const input2 = 'Ella ya se graduó de la universidad? ¡No!';
const output2 = fixInvertedPunc(input2);
console.log(output2); // ¿Ella ya se graduó de la universidad? ¡No!
