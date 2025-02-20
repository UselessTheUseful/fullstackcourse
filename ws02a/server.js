const http = require("http");
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/HTML; charset=utf-8" });
    if (req.url === "/") {
        res.write("Welcome Page");
    } else if (req.url === "/about") {
        res.write("About Page");
    } else if (req.url === "/contact") {
        res.write("Contact Page");
    } else {
        res.write("Hakemaasi sivua ei löydy");
    }
    res.end();
})

server.listen(port, (error) => {
    if (error) {
        console.log("Error " + error);
    } else {
        console.log("Server is listening on port " + port);
    }
});