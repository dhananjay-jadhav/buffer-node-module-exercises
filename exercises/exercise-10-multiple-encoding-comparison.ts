


const string = "Hi! 你好 👋";
console.log(string);


console.log('UTF-8', Buffer.byteLength(string,'utf-8'));
console.log('utf16le', Buffer.byteLength(string,'utf16le'));

const base64 = Buffer.from(string).toString('base64');
console.log('Base64:', base64);
console.log(`Base64 byte length: ${Buffer.byteLength(base64, 'utf8')}`);

