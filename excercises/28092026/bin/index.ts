import { temperatureDrop } from '../src';

const result1 = temperatureDrop([70, 68, 72, 60, 65, 55], 5);
console.log(result1);

const result2 = temperatureDrop([50, 49, 48], 5);
console.log(result2);

const result3 = temperatureDrop([40, 30, 45, 20], 10);
console.log(result3);
