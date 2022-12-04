import express from "express";
import PurchaseModel from "../models/purchase.model.js";

const router = express.Router();

router.get("/purchases/:purchaseId", async(req,res)=>{
    try {
        const { id } = req.params;
        const purchase = await PurchaseModel.findById(id).populate("album");
        return res.status(200).json(purchase);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Algo está errado!"});
    }
    
});

router.post("/purchases",async(req,res)=>{
    try{
        const AddAlbumToPurchase = await PurchaseModel.create(
            {albums:req.body.albums}
        );
        AddAlbumToPurchase.products.array.forEach(async element => {
         
            await PurchaseModel.findByIdAndUpdate(
                element.album,
                {
                    $push: {orders: AddAlbumToOrder._id}
                },
                {new: true, runValidators: true}    
            );
        });
        return res.status(201).json(AddAlbumToPurchase);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Algo está errado!"});
    }
});

export default router;