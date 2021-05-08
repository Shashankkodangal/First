const request = require("request-promise");
const fs = require("fs");
const cheerio = require("cheerio");

async function main() {
    const html = await request.get(
        "https://www.w3schools.com/"
    );
    fs.writeFileSync("./test.html", html);
}

main();