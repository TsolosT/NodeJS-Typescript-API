"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
//Initialize configuration 
dotenv_1.default.config();
const app = (0, express_1.default)();
//Setting the root path for views directory
app.set('views', path_1.default.join(__dirname, 'views'));
//Setting the view engine
app.set('view engine', 'ejs');
//Set Static content serve
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(express_1.default.json());
//Local Server port 
const port = process.env.PORT || 3000;
//Set Endpoints
app.use('/', routes_1.default);
//Server Start Point
app.listen(port, process.env.IP, () => {
    console.log(`Server has started on ${port} PORT ...press ctrl+C to stop!`);
});
