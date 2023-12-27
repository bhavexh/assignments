const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, "text.txt");

function writeFile(data){
    fs.writeFile(filepath, data, (err) => {
        if(err) throw err;
        console.log('Done writing file');
    });
}

writeFile('new text added');
console.log("expensive operation");
for(let i = 0; i < 1000000000; i++){
    // doing something
}