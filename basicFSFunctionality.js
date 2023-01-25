const {readFile, readFileSync} = require('fs');

// const text=readFileSync('./hello.txt', 'utf8');
readFile('./hello.txt','utf-8',(err,text) => {
    console.log(text);
})

// console.log(text);
console.log('do this ASAP');