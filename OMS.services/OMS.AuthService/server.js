import express from "express";
import helmet from "helmet";
import { config } from "dotenv";
import { connectDb } from "./Data/connect";
import { errorHandler } from "./config/errorHandler";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/corsOption";


const app = express();
config();
const URI = process.env.MONGOOSE_PRODUCTION_URI;
const PORT = process.env.PORT || 7005;
connectDb(URI);


app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());



app.all("*", (req, res)=>{
    res.status(404);

    if(req.accepts("html"))
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    else if(req.accepts("json"))
        res.json({ error: "404 Not found"});
    else 
        res.type("txt").send("404 Not found");
});


app.use(errorHandler);


app.listen(PORT, () => {
    console.log('Running AuthService server!');
});