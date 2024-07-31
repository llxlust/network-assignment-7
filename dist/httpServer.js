"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const url_1 = __importDefault(require("url"));
http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let q = url_1.default.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    const { firstName, lastName, month, date, year } = q;
    res.end(`<div><div>${firstName} ${lastName}</div><div>Login Date:${month} ${date},${year}</div></div>`);
}).listen(3100, () => {
    console.log(`Server is running of port ${3100}`);
});
