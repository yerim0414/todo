// 'use strict'
const express = require("express");
const router = express.Router();

/**
 * router 선언
 */
const toDoController = require("../controllers/toDoController")
    router.get("/api/getList",        toDoController.findAll);

router.get('/', (req, res) => {
    res.send('404 . Not Found!')
  })

module.exports = router;