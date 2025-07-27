// const url = require('url');
// let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
// let qry = url.parse(webAddress, true);
// let qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
// console.log(qrydata.firstName); //outputs Clark
//------------------------------------------------------------
// const path = require('path');
// let result = path.basename('/content/index/home.html');
// console.log(result); //outputs home.html to the console
//------------------------------------------------------------
// const path = require('path');
// let result = path.basename('/content/index/home.html');
// console.log(result); //outputs home.html to the console
//-------------------------------------------------------------
// let os = require('os');
// console.log("Computer OS Platform Info : " + os.platform());
// console.log("Computer OS Architecture Info: " + os.arch());
//--------------------------------------------------------
// const fs = require('fs');
// // Read the contents of the file '/content.md' synchronously and store them in 'data'
// const data = fs.readFileSync('README.md', 'utf8');
// // Print the contents of 'content.md' to the console
// console.log(data);
//------------------------------------------------------
// const fs = require('fs');
// // Asynchronously read the file 'sample.txt'
// fs.readFile('sample.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     // Print the contents of 'sample.txt' to the console
//     console.log(data);
// });