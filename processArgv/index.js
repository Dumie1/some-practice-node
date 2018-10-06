const arg1 = parseInt( process.argv[2]);
const arg2 = process.argv[3];
const arg3 = parseInt(process.argv[4]);

if (arg2 == '+') {
    result = arg1 + arg3;
} else if (arg2 == '-') {
    result = arg1 - arg3;
} else if (arg2 == '/') {
    result = arg1 / arg3;
} else if (arg2 == '*') {
    result = arg1 * arg3;
}

console.log('The answer is ' + result);

/*
to run the program - type node index.js 2 + 3 the press enter
use parse int to change string to a number
- multiplication aint working for now
*/