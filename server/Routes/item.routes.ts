import express from "express";
import ItemsController from "../Controllers/item.controller";

const ItemEndpoint = express.Router();


ItemEndpoint.post('/', async (req, res) => {
    try {
        const data = req.body;
        const IC = new ItemsController();
        const result = await IC.addItem(data);
        if(!result.success){
            res.status(40)
        }
    }
    catch (error) {
        console.error("Error In Function/Endpoint, ", error);
    }
});

export default ItemEndpoint;