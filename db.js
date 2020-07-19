import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const openHandler = () => {
  console.log("✅ DB is connected on : 27017");
};
const errorHandler = (error) => {
  console.log(`❌ Error aquired on 27017 : ${error}`);
};

db.once("open", openHandler);
db.on("error", errorHandler);
