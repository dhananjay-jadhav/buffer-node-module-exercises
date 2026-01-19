// Task Requirements

// Create a buffer from "Hello" using UTF-8 encoding
// Create a buffer from "Hello" using UTF-16LE encoding
// Compare the lengths of both buffers
// Display both buffers in hex format



const hello8Buffer = Buffer.from('Hello', 'utf-8');
const hello8BufferLength = hello8Buffer.length;

const hello16Buffer = Buffer.from('Hello', 'utf-16le');
const hello16BufferLength = hello16Buffer.length;


console.log(hello8Buffer.toString('utf-8'));
console.log(hello8Buffer.toString('hex').match(/.{2}/g)?.join(' '));
console.log(hello8BufferLength);


console.log(hello16Buffer.toString('utf-16le'));
console.log(hello16Buffer);
console.log(hello16BufferLength);

console.log('utf-8 is more memory efficient for ASCII charachters');
