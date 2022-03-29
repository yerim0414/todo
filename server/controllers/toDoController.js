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

const addList = async function(req, res) {
    console.log(req.body);
    const data ={
        "TODO_TITLE" : req.body.TODO_TITLE,
    }
    let result = await ToDo.addList(data);
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
    addList
}