const fs = require('fs');
const path = require('path');

//create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err)=> {
//     if(err) throw err;
//     console.log('Folder created');
// })

// fs.writeFile(path.join(__dirname, '/test','hello.txt'), 'Hello Node!', (err) => {
//     if(err) throw err;
//     console.log('File created and written...');
// })

fs.writeFile(path.join(__dirname, '/test','hello.txt'), 'Hello Node!', (err) => {
    if(err) throw err;
    console.log('File created and written...');

    //File append
    fs.appendFile(path.join(__dirname, '/test','hello.txt'), 'Hello once more!', (err)=>{
        if(err) throw err;
        console.log('File appended...');
    })
})



