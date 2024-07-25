const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function groupAnagrams(words) {
    const map = new Map();

    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        
        if (!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }
        map.get(sortedWord).push(word);
    }

    return Array.from(map.values());
}

rl.question('Enter the string: ', (s) => {
    const string = s.split(/[ ,]+/).filter(word => word.trim() !== '');
    const result = groupAnagrams(string);
    console.log(result);
    rl.close();
});