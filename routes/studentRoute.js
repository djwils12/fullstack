const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');


router.route('/')
    .get(studentController.getData)
    .post(studentController.postData);

router.route('/:id')
    .get(studentController.getDataById)
    .patch(studentController.patchDataById)
    .put(studentController.updateDataById)
    .delete(studentController.deleteDataById);

module.exports = router;