"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
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
//Version Endpoint
app.get("/version", (req, res) => {
    // res.json({ 
    //     reference : process.env.API_REFERENCE,
    //     commit : process.env.API_COMMIT,
    //     version : process.env.API_VERSION
    // });
    res.send('Currenly not availiable...');
});
//Health Endpont
app.get("/health", (req, res) => {
    res.json({ message: 'Dog Find is Woof Woof and running.' });
});
/* Home route */
app.get("/", (req, res) => {
    res.render('index');
});
//Not Found Point
app.get("*", (req, res) => {
    res.send('Hmm sorry for not found what you looking for. Contact Dev for any troubleshooting..');
});
//Server Start Point
app.listen(port, process.env.IP, () => {
    console.log(`Server has started on ${port} PORT ...press ctrl+C to stop!`);
});
