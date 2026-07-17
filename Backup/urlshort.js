import http from 'http';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const PORT = 3002;

let urls = {};

if (fs.existsSync("url.json")) {
    urls = JSON.parse(fs.readFileSync("url.json", "utf-8"));
}

function saveUrl() {
    fs.writeFileSync("url.json", JSON.stringify(urls, null, 2));
}

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/shorten") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            try {

                const { originalUrl } = JSON.parse(body);

                if (!originalUrl) {
                    res.writeHead(400, {
                        "Content-Type": "application/json"
                    });

                    res.end(JSON.stringify({
                        error: "Original URL is required"
                    }));

                    return;
                }

                const shortId = uuidv4().slice(0, 6);

                urls[shortId] = originalUrl;

                saveUrl();

                res.writeHead(201, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    shortUrl: `http://localhost:${PORT}/${shortId}`
                }));

            } catch (err) {

                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    error: "Invalid JSON"
                }));
            }
        });

    } else if (req.method === "GET") {

        const shortId = req.url.slice(1);

        if (urls[shortId]) {

            res.writeHead(302, {
                Location: urls[shortId]
            });

            res.end();

        } else {

            res.writeHead(404, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                error: "Not Found"
            }));
        }
    }

});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});