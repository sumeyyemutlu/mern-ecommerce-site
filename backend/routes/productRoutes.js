const express = require('express');
const router =  express.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers')

//@desc tüm ürünleri databaseden GET 
//@route GET /api/products
//access public

router.get('/', getAllProducts)

//@desc biri ürünü databaseden id ile GET 
//@route GET /api/producs/:id
//access public

router.get('/:id', getProductById)

module.exports = router;