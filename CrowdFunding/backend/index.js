const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const CampaignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    campainTitle: {
      type: String,
      required: true,
      unique: true,
    },
    story: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    Raised: {
      type: Number,
      default: 0,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

(async () => {
  const URL = process.env.MONGO_URL;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Database connected successfully`);
  } catch (e) {
    console.log("Error while connecting with Database", e);
  }
})();

const Campaign = mongoose.model("Campaign", CampaignSchema);

app.get("/", async (req, res) => {
  const data = await Campaign.find({});
  res.status(200).json(data);
  console.log(data);
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
