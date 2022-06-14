import http from "http";

// create server object
http
  .createServer((req, res) => {
    // write response
    res.write("Hello world");
    res.end();
  })
  .listen(5001, () => console.log("Server running"));
