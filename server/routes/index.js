// 'use strict'
const express = require("express");
const router = express.Router();

/**
 * router 선언
 */
const toDoController = require("../controllers/toDoController")
    router.get("/api/getList",        toDoController.findAll);
    router.get("/api/getAllList",     toDoController.findAllList);
    router.post("/api/addList",       toDoController.addList); //리스트 추가
    router.post("/api/addCard",       toDoController.addCard); //카드추가(리스트 안에 내용)

router.get('/', (req, res) => {
    res.send('404 . Not Found!')
  })

module.exports = router;