const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the value of x: ', (x) => {
  rl.question('Enter the value of y: ', (y) => {
    x = parseInt(x);
    y = parseInt(y);
    
    for (let i = 1; i <= 100; i++) {
      if (i % x === 0 && i % y === 0) {
        console.log('FooBar');
      } else if (i % x === 0) {
        console.log('Foo');
      } else if (i % y === 0) {
        console.log('Bar');
      } else {
        console.log(i);
      }
    }
    
    rl.close();
  });
});