//// fs is stands for file system used to read and write files in your local system 
 
//// import an external fs module
const fs = require('fs');
// read file a.txt and store its content in contents variable

const contents = fs.readFileSync('a.txt', 'utf-8');
const contents = fs.readFile