import express  from "express";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Hello auth endpoint !")
})

export default router