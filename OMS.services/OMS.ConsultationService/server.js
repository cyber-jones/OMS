import express from "express";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import { config } from "dotenv";
import __dirname from "./config/directoryConfig.js";
import { connectDb } from "./data/connect.js";
import { errorHandler } from "./config/errorHandler.js";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/corsOption.js";
import { reqLogger } from "./config/logConfig.js";


const app = express();
config();
const URI = process.env.MONGOOSE_DEV_URI;
const PORT = process.env.PORT || 7005;
connectDb(URI);


app.use(reqLogger);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));


// app.use("/api/user", userRouter);
// app.use("/api", refreshRouter);


app.all("*", (req, res)=>{
    res.status(404);

    if(req.accepts("html"))
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    else if(req.accepts("json"))
        res.json({ success: false, error: "404 Not found"});
    else 
        res.type("txt").send("404 Not found");
});

app.use(errorHandler);


app.listen(PORT, () => {
    console.log('Running AuthService server!');
});