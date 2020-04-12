'use strict';

const express = require('express');
const router = express.Router();
const categorySchema = require('../models/categories-schema.js');
const Model = require('../models/model.js');


const CategoryModel = new Model(categorySchema);

const logCategory = (req, res, next) => {
    console.log('In categories route');
    next();
};

router.use(logCategory);


/**
 * This route gets you the categories list
 * @route GET /categories
 * @group categories
 * @returns {array} 200 - The array of categories objects
 * @returns {Error} - When unable to get data
 */
router.get('/categories', async (req, res, next) => {
    let results = await CategoryModel.readByQuery({});
    let output = {
        count : results.length,
        results : results,
    }

    res.status(200).send(output);
});

/**
 * This route gets you the categories list
 * @route GET /categories/:id
 * @group categories
 * @param {Number} id.params.required - record with id to find
 * @returns {array} 200 - The array of categories objects
 * @returns {Error} - When unable to get data
 */

router.get('/categories/:_id', async (req, res, next) => {
    let record = await CategoryModel.read(req.params.id);

    res.status(200).send(record);
});

/**
 * This route allows you to create a category
 * @route POST /categories
 * @group categories
 * @returns {object} 201 - The created objectNew categories object
 * @returns {Error} - When unable to create data
 */
router.post('/categories', async (req, res, next) => {
    let newCategory = await CategoryModel.create(req.body);
    res.status(201).send(newCategory);
});

/**
 * This route allows you to update a category
 * @route PUT /categories/:id
 * @group categories
 * @param {Number} id.params.required - id to update
 * @returns {object} 200 - Updated data
 * @returns {Error} - Unable to update data
 */

router.put('/categories/:_id', async (req, res, next) => {
   let record = await CategoryModel.update(req.params.id,req.body);
   res.status(200).send(record);
});

/**
 * This route allows you to delete a category
 * @route DELETE /categories/:id
 * @group categories
 * @param {Number} id.params.required - id to delete
 * @returns {object} 200
 * @returns {Error} - Unable to delete
 */

router.delete('/categories/:_id', async (req, res, next) => {
   let record = await CategoryModel.delete(req.body);
   res.status(200).send(record);
});

module.exports = router;