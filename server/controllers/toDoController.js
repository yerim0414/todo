'use strict'

const ToDo = require("../models/toDoModel")

const findAll = async function (req, res) {
    let result = await ToDo.findAll();
    res.status(200).json(result);
}

/**
 * 
 * @param {*} todoSeq 
 * @param {*} futureIndex 
 * @returns 
 */

module.exports = {
    findAll
}