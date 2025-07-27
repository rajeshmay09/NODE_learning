//ending an HTTP request works in Node.js using the built-in 
//https module. 
const https = require('https');

const options = {
  hostname: 'api.example.com',
  path: '/data',
  //method: 'GET',
};
//The HTTP.request function takes in a URL and a set of options.
// If both are passed, the two are merged, with options taking
// precedence. You can define the host, ports, authentication, 
//protocol, and other headers in the options object.
// The HTTP.request method also accepts an optional callback
// function that is invoked immediately once a response is 
//received.

const req = https.request(options, (res) => {
  let data = '';

  // Listen for data chunks
  res.on('data', (chunk) => {
    data += chunk;
  });

  // When the response ends
  res.on('end', () => {
    console.log('Response:', data);
  });
});

// Handle errors
req.on('error', (e) => {
  console.error(`Error: ${e.message}`);
});

req.end();
