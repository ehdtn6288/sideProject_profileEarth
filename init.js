import app from "./app";
import "./db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const handleListen = () => {
  return console.log(
    `✅ Listening on : http://localhost : ${process.env.PORT}`
  );
};

app.listen(process.env.PORT, handleListen);
