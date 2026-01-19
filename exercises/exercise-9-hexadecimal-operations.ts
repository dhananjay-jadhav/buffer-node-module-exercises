// Task Requirements

// Convert "Hello" to hex
// Convert hex "4e6f64656a73" back to string
// Create a function that formats hex as "48 65 6c 6c 6f"
// Create a function that validates hex strings


const buffer = Buffer.from('Hello');
console.log(buffer.toString('hex'));

console.log(buffer.toString('hex').match(/.{1,2}/g)?.join(' '));


const isValidHex = (str: string) => {
    if(str.length % 2 === 0 && (/^[0-9a-fA-F]*$/).test(str)){
        return true;
    }
    return false;
}


console.log(isValidHex(buffer.toString('hex')));


console.log(isValidHex(buffer.toString('utf-8')));