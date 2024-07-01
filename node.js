const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Read the content of the website (index.html)
const websiteContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/about:blank') {
        // Display the entire website content
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(websiteContent);
    } else {
        // Redirect to "about:blank"
        res.writeHead(302, { Location: '/about:blank' });
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
