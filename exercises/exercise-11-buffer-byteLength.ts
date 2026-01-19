// Task Requirements

// Calculate byte length of "Hello" in utf8, utf16le, base64, hex
// Calculate byte length of "你好" in different encodings
// Create a function that estimates base64 output size
// Verify calculations by creating actual buffers

const string = 'Hello';

console.log(string);
console.log(Buffer.byteLength(string,'utf-8'));
console.log(Buffer.byteLength(string, 'utf-16le'));

const chiString = '你好';
console.log(chiString);
console.log(Buffer.byteLength(chiString,'utf-8'));
console.log(Buffer.byteLength(chiString, 'utf-16le'));

const base64SizeCalculator = (input: number) => {
    return Math.ceil(input/3) * 4
}

console.log(base64SizeCalculator(100));