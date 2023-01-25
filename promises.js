const {readFile} = require('fs/promises');

async function hello(){
    const text = await readFile('./hello.txt','utf-8');
}