// Task Requirements

// Convert the string "Hello, World!" to Base64
// Decode a Base64 string back to UTF-8
// Encode a longer text and compare sizes
// Create a function that validates Base64 strings



const buffer = Buffer.from('Hello, World!');

console.log(buffer.toString());

const decode64 = buffer.toString('base64');
const decode8 = buffer.toString('utf-8');

console.log(decode64.length, decode8.length)

