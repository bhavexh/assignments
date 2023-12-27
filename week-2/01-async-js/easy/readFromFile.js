const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "text.txt");

function read(){
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if(err) throw err;
        console.log(data);
        console.log("Done reading file");
    });
}

read();

console.log('this is an expensive operation')
for(let i=0; i<10000000000; i++){
    // do nothing
}