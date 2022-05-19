import express, { Router }  from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE
router.post("/",async (res,req) =>{
    const newHotel = new Hotel(req.body);
    try{
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
    }catch(err){
        res.status(500).json(err);
    }
});
//UPDATE

export default router