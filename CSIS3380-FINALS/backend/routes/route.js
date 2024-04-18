const router = require("express").Router();
let art = require("../models/model.js");

// GET ALL ARTS
router.get('/', async(req, res)=>{
    try{
        const result = await art.find({});
        res.status(200).json(result);
    }catch(err)
    {
        res.status(500).json(err);
    }
});

//ADD/SAVE ART
router.post('/', async(req,res)=>{
    const {artName, serial, src, alt, bids} = req.body;

    try{
        const newArt = new art({
            artName, 
            serial, 
            src, 
            alt, 
            bids, 
        });
        
        await newArt.save();
        res.status(201).json(newArt);
    }catch(err)
    {
        res.status(500).json(err);
    }
});

// GET SINGLE ART BY ID
router.get('/:id', async(req, res)=> {
    try{
        const result = await art.findById(req.params.id)
        res.status(200).json(result);
    } catch(err)
    {
        res.status(500).json(err);
    }
});

// UPDATE ART BY ID
router.put("/:id", async(req, res)=>{
    const id = req.params.id;
    const {artName, serial, src, alt, bids} = req.body;
    try{
        await art.findByIdAndUpdate(
            id,
            {
                artName: artName,
                serial: serial,
                src: src,
                alt: alt,
                bids: bids,
            },
            {new: true}
        );
        res.status(200).json("The selected Art has been updated!");
    }catch(err)
    {
        res.status(500).json(err);
    }
});

// DELETING ART BY ID
router.delete('/:id', async(req, res)=>{
    try{
        await art.findByIdAndDelete(req.params.id);
        res.status(200).json("Selected Art has been Deleted!");
    }catch(err)
    {
        res.status(500).json(err);
    }
});

// ADD BID TO ART BY ID
router.post("/:id/bid", async (req, res) => {
    const id = req.params.id;
    const { user, bid } = req.body;
    try {
        const updatedArt = await art.findByIdAndUpdate(
            id,
            {
                $push: { bids: { user, bid } },
            },
            { new: true }
        );
        res.status(200).json(updatedArt);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;