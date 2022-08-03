const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const auth = require("./middlewares/auth");
require("dotenv").config();

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(cookieParser());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
const router = express.Router();

// const authRouter = require("./routes/authRouter");
const UserAdminRouter = require("./routes/UserAdminRouter");
const AuthRouter = require("./routes/AuthRouter");
const AssetRouter = require("./routes/AssetRouter");
const PriceRouter = require("./routes/PriceRouter");
const QuantityRouter = require("./routes/QuantityRouter");
const ProfilRoyalFamilyRouter = require("./routes/ProfilRoyalFamily");

app.use(router);

// router.use("/auth", authRouter);
router.use("/user", auth, UserAdminRouter);
router.use("/auth", AuthRouter);
router.use("/asset", AssetRouter);
router.use("/price", PriceRouter);
router.use("/quantity", QuantityRouter);
router.use("/ProfilRoyalFamily", ProfilRoyalFamilyRouter);

// Redirect all requests to the REACT app

// app.get("*", (req, res) => {
//   res.sendFilepath.join(
//     __dirname,
//     "..",
//     "..",
//     "frontend",
//     "dist",
//     "index.html"
//   );
// });

// ready to export
module.exports = app;
