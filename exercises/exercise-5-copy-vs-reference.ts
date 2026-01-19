// Task Requirements

// Create an original buffer from "Hello, World!"
// Create a copy using Buffer.from()
// Create a view using subarray()
// Modify the first byte in the copy
// Modify the first byte in the view
// Display all three buffers to see which were affected

const buffer = Buffer.from('Hello, World!');
const bufferCopy = Buffer.from(buffer);
const bufferSubArr = buffer.subarray(0, 5);


console.log('J'.charCodeAt(0))      // 74
console.log('M'.charCodeAt(0))      // 77

bufferSubArr[0] = 77;
bufferCopy[0] = 74;


console.log(buffer.toString());
console.log(bufferCopy.toString());
console.log(bufferSubArr.toString());

