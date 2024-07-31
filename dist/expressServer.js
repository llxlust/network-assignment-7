"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3100;
app.get("/", (req, res) => {
    const { firstName, lastName, month, date, year } = req.query;
    res.send(`<div><div>${firstName} ${lastName}</div><div>Login Date:${month} ${date},${year}</div></div>`);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
