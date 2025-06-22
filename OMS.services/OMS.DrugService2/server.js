import { config } from "dotenv";
config();
import express from "express";
import { app, server } from "./config/socket.io.config.js";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import __dirname from "./config/directoryConfig.js";
import { connectDb, Migration } from "./data/connect.js";
import { errorHandler } from "./config/errorHandler.js";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/corsOption.js";
import { reqLogger } from "./config/logConfig.js";
import { verifyAccess } from "./middlewares/verifyAccess.js";
import { getLogs } from "./controllers/dugController.js";
import { credentials } from "./middlewares/corsCredentials.js";
import drugRouter from "./routes/drugRoute.js";
import cartRouter from "./routes/cartRoute.js";
import { ROLES } from "./utils/SD.js";
import { verifyRoles } from "./middlewares/verifyRoles.js";




const URI = process.env.MONGOOSE_PRODUCTION_URI;
const PORT = process.env.PORT || 7003;
connectDb(URI);
// Migration();


app.use(reqLogger);
app.use(credentials);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "public")));



app.use(verifyAccess);
app.use("/api/drug", drugRouter);
app.use("/api/cart", cartRouter);
app.use("/api/logs", verifyRoles([ROLES[0]]), getLogs);


// app.all("*", (req, res) => {
//     res.status(404);

//     if(req.accepts("html"))
//         res.sendFile(path.join(__dirname, 'views', '404.html'));
//     else if(req.accepts("json"))
//         res.json({ success: false, error: "404 Not found"});
//     else 
//         res.type("txt").send("404 Not found");
// });


app.use(errorHandler);


server.listen(PORT, () => {
    console.log('Running Drug server!');
});