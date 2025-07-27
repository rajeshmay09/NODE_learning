//Node.js makes extensive use of callback functions to return 
//the result to the calling function. Node.js modules in the 
//software development kit (SDK) pass an error object as the 
//first parameter in a callback function
// HTTP requests are asynchronous, meaning they don’t block the 
//rest of the code. The callback is how you handle the response
// after it comes back from the server.

function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Call the callback function
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greetUser("Alice", sayGoodbye);
  
//greetUser is a function that takes two arguments:
//name: a string
//callback: a function to be called afterward
//Inside greetUser, we log a greeting, then call the callback.
//We pass sayGoodbye as the callback — 
//it gets called after the greeting.

// const https = require('https');

// // This function makes the request and uses a callback to return the result
// function makeHttpRequest(options, callback) {
//   const req = https.request(options, (res) => {
//     let data = '';

//     res.on('data', (chunk) => {
//       data += chunk;
//     });

//     res.on('end', () => {
//       callback(data); // call the callback with the result
//     });
//   });

//   req.on('error', (err) => {
//     console.error("Request error:", err.message);
//     callback(null); // optional: return null or error info
//   });

//   req.end();
// }

// // Usage example:
// const options = {
//   hostname: 'jsonplaceholder.typicode.com',
//   path: '/todos/1',
//   method: 'GET'
// };

// makeHttpRequest(options, (result) => {
//   console.log("Callback received result:");
//   console.log(result);
// });

//----------------------------------

//callback fn, asynchronous I/O
//callback hell- way s to mitigate it use promises
//,async await

//----------------------------

