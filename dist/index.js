"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_source_1 = require("./src/data-source");
const app = (0, express_1.default)();
const hostname = 'localhost';
const port = 3001;
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Connect database success');
});
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`server is running http://${hostname}:${port}/`);
});
//# sourceMappingURL=index.js.map