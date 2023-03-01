//Code Module
//fc - (File System) create, write, read, upate, delete. 
//read
const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'note.txt'), (error, data) => {
    if(error){
        throw new Error(error);
        console.log('Reading Data', data);
    }
    //buffer format
    // console.log(data);
    //string format
    console.log(data.toString());
})

//Writing 
fs.writeFile('note.txt', 'Thanks for writing node.js', (error) => {
    if(error){
        throw new Error(error)
    }
    console.log('Writing Completed')
})


process.on('uncaughtException', (error) => {
    console.log(error.message);
    process.exit(1)
})

