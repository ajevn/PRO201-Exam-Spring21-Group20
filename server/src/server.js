require("dotenv").config();
const https = require("https");
const http = require("http");
const fs = require("fs");
const app = require("./app");

const port = process.env.PORT || "3000";

const server =
  fs.existsSync("server.key") && fs.existsSync("server.crt")
    ? https.createServer(
        {
          key: fs.readFileSync("server.key"),
          cert: fs.readFileSync("server.crt"),
        },
        app
      )
    : http.createServer(app);

server.listen(port, () => {
  console.log(
    `server started on http://localhost:${port} or https://localhost:${port}`
  );
});
