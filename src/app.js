import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan"; 
import mongoose from "mongoose";
import bread from "./models/bread";
import globalRouter from "./routers/globalRouter";
import path from "path";


const PORT = process.env.PORT; 

const app = express();

app.use(morgan(`dav`));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

mongoose.connect(`mongodb://4leaf:fourleaf0309@210.114.1.127:27017/admin`, {
    dbName: `NGH_PRA`,
    useNewUrlParser: true,
    useCreateIndex: true,
}, 
(error) => {
  if (error) {
    console.log("Failed To DB Connect");
  } else {
    console.log("CUNNECT TO DB!");
  }
 }
);

app.get("/", async(req, res) => {
    console.log("CALLED BY USER!");

    const result = await bread.find({}, {});

    return res.render("screens/home", { LectureList: result });
});

app.get("/bread", async(req, res) => {
  const result = await bread.find({}, {});

  res.render("screens/bread", { dataList: result });
});

app.get("/bread", (req, res) => {
  res.render("layouts/main");
});

app.get("/", globalRouter);

app.get("/bread", globalRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START!`);
});
