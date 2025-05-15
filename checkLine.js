const readline = require('readline');

// Create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Store all input lines
const inputLines = [];

// Greet user and give instructions
console.log('Welcome! Please enter lines of text (one per line).');
console.log('When done, press Ctrl+D (Linux/macOS) or Ctrl+C (Windows) or Ctrl+Z then Enter (Windows).');

// Store each line
rl.on('line', (line) => {
    inputLines.push(line.trim());
});

// When input ends, process and show output
rl.on('close', () => {
    const output = [];

    for (const line of inputLines) {
        const freq = {};

        for (const char of line) {
            if (char !== ' ') {
                freq[char] = (freq[char] || 0) + 1;
            }
        }

        const hasExactlyTwo = Object.values(freq).some(count => count === 2);

        if (hasExactlyTwo) {
            output.push(line);
        }
    }

    console.log('\nOutput:');
    console.log(output.join('\n'));
});
