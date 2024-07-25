const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(s) {
    const normalized = s.normalize('NFKD');
    const cleaned = normalized.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    const len = cleaned.length;
    for (let i = 0; i < len / 2; i++) {
      if (cleaned[i] !== cleaned[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }

rl.question('Enter the string: ', (s) => {
    string = s;

    isPalindrome(string) ? console.log('The string is a palindrome.') : console.log('The string is not a palindrome.');

    rl.close();
});   