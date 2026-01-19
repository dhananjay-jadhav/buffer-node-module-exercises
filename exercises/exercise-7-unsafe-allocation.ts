// Task Requirements

// Create a safe buffer of 100 bytes
// Create an unsafe buffer of 100 bytes
// Compare their contents
// Time the creation of 10000 safe vs unsafe buffers
// Show why unsafe can be dangerous


const safeBuffer = Buffer.alloc(100);
const unsafeBuffer = Buffer.allocUnsafe(100);

console.log(safeBuffer);
console.log(unsafeBuffer);

console.time('Safe');
const safeBigBuffer = Buffer.alloc(10000000);
console.timeEnd('Safe');

console.time('UnSafe');
const unsafeBigBuffer = Buffer.allocUnsafe(10000000);
console.timeEnd('UnSafe');

console.log('safe',safeBigBuffer.toString());
console.log('unsafe',unsafeBuffer.toString());

// <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 50 more bytes>
// <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 50 more bytes>
// Safe: 0.635ms
// UnSafe: 0.015ms