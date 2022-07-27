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

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const stream = fs.createReadStream("sample.txt");
  stream.pipe(res);
});
server.listen(3000);
