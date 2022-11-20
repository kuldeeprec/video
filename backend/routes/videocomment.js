const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Comments = require("../models/Comments");

router.post('/addcomments',
    [
      body("comment", "Enter a valid comment").isLength({ min: 5 }),
    ],
    async (req, res) => {
      try {
        const { comment } = req.body;
        const user_id = req.body.user_id;
        // if there are any error then send error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const  comments= new Comments({
          comment,
          user_id: user_id
        });
        const savedContent = await comments.save();
        res.json(savedContent);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server Error occured");
      }
    }
  );

  module.exports = router