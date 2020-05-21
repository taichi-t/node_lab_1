const path = require('path');

// basename
console.log(path.basename(__filename));

//directory
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//concat
console.log(path.join(__dirname, 'test','hello.html'));