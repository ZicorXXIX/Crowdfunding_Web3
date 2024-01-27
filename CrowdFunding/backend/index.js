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
    target: {
      type: Number,
      required: true,
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

app.post("/createCampaign", async (req, res) => {
  const campaign = new Campaign({
    name: req.body.name,
    campainTitle: req.body.title,
    story: req.body.description,
    endDate: req.body.deadline,
    image: req.body.image,
    target: req.body.target,
  });

  campaign
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Campaign created successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error while creating campaign" });
    });
});

app.get("/search/:query", async (req, res) => {
  console.log(req.params.query);
  let queryParam = req.params.query;
  let regex = new RegExp(queryParam, "m");
  // let queryObject = {
  //  campaignTitle: { $regex: regex }
  // };

  Campaign.find({
    campainTitle: { $regex: regex },
  })
    .then((result) => {
      // console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
