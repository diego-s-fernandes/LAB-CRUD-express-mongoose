import express from "express";
import AlbumModel from "../models/album.model.js";

const router = express.Router();

router.get("/albums", async(req, res)=>{
    try {
        const album = await AlbumModel.find()
        return res.status(200).json(album);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Algo de errado não está certo!"})
        
    }

});

router.get("/albums/:albumId", async(req, res) =>{
    try {
        const {id} = req.params;
        const album = await AlbumModel.findById(id);
        if(!album)
            return response.status(404).json({msg: "Album não encontrado!"});

        return response.status(200).json(album);


        
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Algo de errado não está certo!"});
        
    }
});

router.post("/albums", async (req, res) =>{
    try {
        
        const newAlbum = await AlbumModel.create(req.body)
        return res.status(201).json(newAlbum)
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Algo de errado não está certo"});
        
    }
});
//editar albums
router.put("/albums/:albumId", async(req,res) =>{
    try {
        const {id} = req.params;
        const update = await AlbumModel.findByIdAndUpdate(
            id,
            {...req.body},
            {new: true, runValidators: true}
        );
        return res.status(200).json(update);
    } catch (error) {
        conseole.log(error);
        return res.status(500).json({msg: "algo de errado não está certo"})
        
    };

});

router.delete()