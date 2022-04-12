const http = require("http");
const fs = require("fs");
const { register, login } = require("./controllers/userHanlder");

// Creat Server
http
  .createServer(function (req, res) {
    console.log("server is running ...");

    // ----------------- Signup -----------------
    if (req.url === "/signup" && req.method === "POST") {
      let body = [];
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          body = Buffer.concat(body).toString();
          let result = register(JSON.parse(body));
          if (result.success)
            res.writeHead(200, { "Content-Type": "application/json" });
          else {
            res.writeHead(400, { "Content-Type": "application/json" });
          }
          res.end(JSON.stringify(result));
        });
    }

    // ----------------- login -----------------
    if (req.url === "/login" && req.method === "POST") {
      let body = [];
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          body = Buffer.concat(body).toString();
          let result = login(JSON.parse(body));
          if (result.success) {
            res.writeHead(200, { "Content-Type": "text/html" });
            let html = fs.readFileSync("./views/profile.html", "utf8");
            html = html.replace("userName", JSON.parse(body).username);
            res.end(html);
          } else {
            res.writeHead(400, { "Content-Type": "application/json" });
          }
          res.end(JSON.stringify(result));
        });
    }

    // ----------------- Home Page -----------------
    if (req.url === "/" || req.url === "/homepage") {
      //   fs.createReadStream("./views/homepage.html").pipe(res);
      let html = fs.readFileSync("./views/homepage.html", "utf8");
      res.end(html);
    }

    // ----------------- URL doesn’t exist -----------------
    let routes = ["/", "/login", "/signup", "/homepage"];
    if (!routes.includes(req.url)) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ msg: "URL not found" }));
    }
  })
  .listen(3000);
