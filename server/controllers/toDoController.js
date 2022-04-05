'use strict'

const ToDo = require("../models/toDoModel")

const findAll = async function (req, res) {
    let result = await ToDo.findAll();
    res.status(200).json(result);
}

const findAllList = async function(req, res) {
    let result = await ToDo.findAllList();
    res.status(200).json(result);
}

const addList = async function(req, res) { //리스트 추가
    console.log(req.body);
    const data ={
        "TODO_TITLE" : req.body.TODO_TITLE,
    }
    let result = await ToDo.addList(data);
    res.status(200).json(result);
}

const addCard = async function(req, res){ //카드추가(리스트 안에 내용)
    console.log(req.body);
    const data ={
        "CARD_CONTENT" : req.body.CARD_CONTENT,
        "TODO_SEQ" : req.body.TODO_SEQ
    }
    let result = await ToDo.addCard(data);
    res.status(200).json(result);
}

/**
 * 
 * @param {*} todoSeq 
 * @param {*} futureIndex 
 * @returns 
 */

module.exports = {
    findAll,
    findAllList,
    addList,
    addCard,
}