// Create a buffer from the array [72, 101, 108, 108, 111] (spells "Hello")
// Display the buffer as a string
// Create a buffer from [0x48, 0x69, 0x21] (spells "Hi!")
// Create a buffer with bytes outside valid range (e.g., 300) and observe truncation

const buffer = Buffer.from([72, 101, 108, 108, 111]);
console.log(buffer.toString());

const buffer2 = Buffer.from([0x48, 0x69, 0x21]);
console.log(buffer2.toString());

const buffer3 = Buffer.from([72, 101, 108, 108, 311]);
console.log(buffer3.toString());