'use strict';

const express = require('express');
const router = express.Router();
const productSchema = require('../models/products-schema.js');
const Model = require('../models/model.js');

const ProductModel = new Model(productSchema);

const logCategory = (req, res, next) => {
    console.log('In products route');
    next();
};

router.use(logCategory);


/**
 * This route gets you the categories list
 * @route GET /products
 * @group products
 * @returns {array} 200 - The array of products objects
 * @returns {Error} - When unable to get data
 */
router.get('/products', async (req, res, next) => {
    let results = await ProductModel.readByQuery({});
    let output = {
        count: results.length,
        results : results,
    }

    res.status(200).send(output);
});

/**
 * This route gets you the products list
 * @route GET /products/:id
 * @group categories
 * @param {Number} id.params.required - record with id to find
 * @returns {array} 200 - The array of products objects
 * @returns {Error} - When unable to get data
 */

router.get('/products/:_id', async (req, res, next) => {
    let record = await ProductModel.read(req.params._id);

    res.status(200).send(record);
});

/**
 * This route allows you to create a product
 * @route POST /products
 * @group products
 * @returns {object} 201 - New products object
 * @returns {Error} - When unable to create data
 */
router.post('/products', async (req, res, next) => {
    let newProduct = await ProductModel.create(req.body);
    res.status(201).send(newProduct);
});

/**
 * This route allows you to update a product
 * @route PUT /products/:id
 * @group products
 * @param {Number} id.params.required - id to update
 * @returns {object} 200 - Updated data
 * @returns {Error} - Unable to update data
 */

router.put('/products/:_id', async (req, res, next) => {
   let record = await ProductModel.update(req.params._id,req.body);
   res.status(200).send(record);
});

/**
 * This route allows you to update a product
 * @route PATCH /products/:id
 * @group products
 * @param {Number} id.params.required - id to update
 * @returns {object} 200 - Updated data
 * @returns {Error} - Unable to update data
 */

router.delete('/products/:_id', async (req, res, next) => {
   let record = await ProductModel.delete(req.body);
   res.status(200).send(record);
});

module.exports = router;