const express = require('express');

const router = express.Router();

const {comentarioRopaServices} = require('./comentarioRopaServices');

router.get("/", comentarioRopaServices.getAll)

router.post('/', comentarioRopaServices.create);

router.get('/:idRopa', comentarioRopaServices.getById)

module.exports = router;