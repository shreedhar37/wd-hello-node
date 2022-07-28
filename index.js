// load fs (file system) module
//const fs = require("fs");

// write into the file  sample.txt

// fs.writeFile(
//   "sample.txt",
//   "Hello World. Welcome to Node.js File System module.",
//   function (err) {
//     if (err) throw err;
//     console.log("File created!!!");
//   }
// );

// // read from the file sample.txt

// fs.readFile("sample.txt", function (err, data) {
//   if (err) throw err;
//   console.log(data.toString());
// });

// // append the contents in file sample.txt

// fs.appendFile("sample.txt", "This is my updated content", function (err) {
//   if (err) throw err;
//   console.log("File is updated!!");
// });

// // rename the file 'sample.txt.'
// fs.rename("sample.txt", "test.txt", function (err) {
//   if (err) throw err;
//   console.log("File name updated !!!");
// });

// // delete the file in ecosystem
// fs.unlink("test.txt", function (err) {
//   if (err) throw err;
//   console.log("File test.txt deleted successfully!!");
// });

// read file on HTML page using fs module.
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer(function (req, res) {
//   fs.readFile("sample.txt", (err, data) => {
//     res.end(data);
//   });
// });

// server.listen(3000);

// stream module - used to optimize memory operation during reading the file.

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(function (req, res) {
//   const stream = fs.createReadStream("sample.txt");
//   stream.pipe(res);
// });
// server.listen(3000);

// use nodejs to display HTML

// const http = require("http");
// const fs = require("fs");
// const { listenerCount } = require("process");

// fs.readFile("home.html", function (err, home) {
//   if (err) throw err;
//   http
//     .createServer(function (request, response) {
//       response.writeHeader(200, { "Content-Type": "text/html" });
//       response.write(home);
//       response.end();
//     })
//     .listen(3000);
//console.log("Server is running on localhost:3000");
//console.log("Press ctrl + c to stop the server");

// });

// use path to display HTML

// const http = require("http");
// const fs = require("fs");

// let homeContent;
// let projectContent;

// fs.readFile("home.html", function (err, home) {
//   if (err) throw err;
//   homeContent = home;
// });

// fs.readFile("project.html", function (err, project) {
//   if (err) throw err;
//   projectContent = project;
// });

// http
//   .createServer(function (request, response) {
//     let url = request.url;
//     response.writeHeader(200, { "Content-Type": "text/html" });
//     switch (url) {
//       case "/project":
//         response.write(projectContent);
//         response.end();
//         break;

//       default:
//         response.write(homeContent);
//         response.end();
//         break;
//     }
//   })
//   .listen(3000);
// console.log("Server is running on localhost:3000");
//console.log("Press ctrl + c to stop the server");

// ReadLine library
// const readLine = require("readline");

// const lineDetail = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// lineDetail.question(`Please provide your name : `, (name) => {
//   console.log(`Hi ${name}`);
//   lineDetail.close();
// });

// display HTML by taking file path from user
const readLine = require("readline");
const fs = require("fs");
const http = require("http");

const lineDetail = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lineDetail.question(`Please provide a path to the file : `, (path) => {
  const server = http.createServer(function (request, response) {
    const stream = fs.createReadStream(`${path}`);
    stream.pipe(response);
  });
  lineDetail.close();
  server.listen(3000);
  console.log("Server is running on localhost:3000");
  console.log("Press ctrl + c to stop the server");
});
