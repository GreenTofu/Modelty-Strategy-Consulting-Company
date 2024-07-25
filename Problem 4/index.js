const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rotateSparseArray(arr, steps) {
    if (!Array.isArray(arr) || steps < 0) {
        throw new Error('Invalid input');
    }

    const n = arr.length;
    if (n === 0) return arr;

    const nonNullValues = arr.filter(val => val !== null);

    steps = steps % nonNullValues.length;
    if (steps === 0) return arr;

    const rotatedValues = nonNullValues.slice(-steps).concat(nonNullValues.slice(0, -steps));

    const result = arr.slice();
    let j = 0;
    
    for (let i = 0; i < n; i++) {
        if (arr[i] !== null) {
            result[i] = rotatedValues[j];
            j++;
        }
    }

    return result;
}

rl.question('Enter the array elements separated by commas (use "null" for default values): ', (arrayInput) => {
    const arr = arrayInput.split(',').map(element => element.trim() === 'null' ? null : parseInt(element.trim()));

    rl.question('Enter the number of steps to rotate: ', (stepsInput) => {
        const steps = parseInt(stepsInput.trim());

        try {
            const result = rotateSparseArray(arr, steps);
            console.log('Rotated array:', result);
        } catch (error) {
            console.error(error.message);
        }

        rl.close();
    });
});