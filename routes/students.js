//const express = require("express");
import express from "express";
const router = express.Router();
//const Cases = require('../models/Cases');
import Cases from "../models/Students.js";

/* GET ALL STUDENTS */
router.get('/', function(req, res, next) {
    Cases.find(function (err, cases) {
        if (err) return next(err);
        res.json(cases);
    });
});
  
/* GET SINGLE STUDENTS BY ID */
router.get('/:id', function(req, res, next) {
    Cases.findById(req.params.id, function (err, cases) {
        if (err) return next(err);
        res.json(cases);
    });
});
  
/* POST STUDENTS
*On poste les données à partir de l'app mobile 
*/
router.post('/', function(req, res, next) {
    Cases.create(req.body, function (err, cases) {
        if (err) return next(err);
        res.json(cases);
    });
});
  
/* UPDATE STUDENTS */
router.put('/:id', function(req, res, next) {
    Cases.findByIdAndUpdate(req.params.id, req.body, function (err, cases) {
        if (err) return next(err);
        res.json(cases);
    });
});
  
/* DELETE STUDENTS */
router.delete('/:id', function(req, res, next) {
    Cases.findByIdAndRemove(req.params.id, req.body, function (err, cases) {
        if (err) return next(err);
        res.json(cases);
    });
});


//module.exports = router;
export default router;