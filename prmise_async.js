//Promise
//Promises. - return object. 
//pending,resolved,rejected
// fs module promise 
//async await easier then promise to read.

function doSomethingAsync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
  
        if (success) {
          resolve("✅ Task completed successfully!");
        } else {
          reject("❌ Something went wrong.");
        }
      }, 1000); // simulate 1 second async delay
    });
  }
  
  //http request promise

  const https = require('https');

function makeHttpRequest(options) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data); // Resolve the Promise with the full response
      });
    });

    req.on('error', (err) => {
      reject(err); // Reject the Promise if there’s an error
    });

    req.end(); // Finalize and send the request
  });
}

//ASYNC AWAIT
//readable, error handling, debugging.
//try cathc uasage
//Axios
// uses promises fro aysnc await, transforms json data
// good error handling