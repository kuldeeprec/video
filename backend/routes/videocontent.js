const express = require("express");
const router = express.Router();
const Battingcontent = require("../models/Battingcontent");
const Bowlingcontent = require("../models/Bowlingcontent");
const Fieldingcontent = require("../models/Fieldingcontent");

  // ROUTE1:-Get all the thread using: GET "api/fetchallthread".
  router.get("/fetchallbattingvideo", async (req, res) => {
  
    try {
      const dt = await Battingcontent.find();
      let content = [];
      let x, y;
      dt.map((item, i) => (
        x = item.videoTitle, y = item.videoUrl,
        obj = {
        videoTitle: x,
        videoTitle: y
        },
        content.push(obj)
      ))
      res.json({content});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server Error occured");
    }
  });

  module.exports = router
  