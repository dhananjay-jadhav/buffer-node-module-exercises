import { Buffer} from 'node:buffer';

// Task Requirements

// Create a buffer of 10 bytes using Buffer.alloc()
// Display the buffer content
// Display each byte value using a loop
// Verify all bytes are zero


const buffer = Buffer.alloc(10,0);

console.log(buffer);
console.log(buffer.length);

for(const value of buffer.values()){
    console.log(value);
}

let isZero = false;
for(const value of buffer.values()){
    if(value === 0){
        isZero = true;
    } else {
        isZero = false;
    }
}

const isZeroEvery = buffer.every((value) => value === 1);

console.log('Buffer is zero every:',isZeroEvery);
console.log('Buffer is zero :',isZero);
