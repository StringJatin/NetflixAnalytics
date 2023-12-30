import Movie from "../models/Movie.js";
import express from 'express';
import verify from "../verifyToken.js";
import mongoose from "mongoose";

const router = express.Router();

// Create a movie list

router.post("/",verify, async (req,res)=>{
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body);
        try{
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("You are not allowed!");
    }
});


//Update a movie list

router.put("/:id", verify, async(req,res)=>{
    if(req.user.isAdmin){
        try{
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,{
                $set : req.body,
    
            },{
                new: true
            });
            res.status(200).json(updatedMovie);

        } 
        catch(err){
            res.status(500).json(err);
        }

    }
    else {
        res.status(403).json("you are not allowed!");
    }
});



//Delete a movie

router.delete("/:id", verify, async(req,res)=>{
    if(req.user.isAdmin){
        try{
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Your movie has been deleted!");
        }
        catch(err){
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("You are not allowed");
    }
});

//Get 

router.get("/find/:id", verify, async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);



    }
    catch(err){
        res.status(500).json(err);

    }
});

//Get a random movie or series for the banner

router.get("/random", verify, async(req,res)=>{
    const type = req.query.type;
    let movie;
    try{
        if(type === "series"){
         movie = await Movie.aggregate([
            { $match : {isSeries: true}},
            { $sample : {size : 1}},
         ]);
        }
        else {
            movie = await Movie.aggregate([
                { $match : {isSeries: false}},
                { $sample : {size : 1}},
             ]);
        }
        res.status(200).json(movie);
    }
    catch(err){
        res.status(500).json(err);
    }
});


//Get All the movies

router.get("/", verify, async(req,res)=>{
   if(req.user.isAdmin){
    try{
        const movies = await Movie.find();
        res.status(200).json(movies.reverse());
    }
    catch(err){
        res.status(500).json(err);
    }
   }
   else {
    res.status(403).json("You are not allowed");
   }
    
});



export default router;