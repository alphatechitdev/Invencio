import express from 'express';
import ItemsController from '../Controllers/item.controller.ts';

const ItemEndpoint = express.Router();

ItemEndpoint.post('/addItem', async (req, res) => {
    try {
        const {item} = req.body;
        const IC = new ItemsController();
        const result = await IC.addItem(item);
        if (!result.success) {
            res.status(400).json({success:false})
            return;
        }
        res.status(200).json({success:true})
    } catch (error) {
        console.error("Error In Function/Endpoint, ", error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

ItemEndpoint.get('/getItems', async (req, res) => {
    try {
        const category = 
        const response =  
    } catch(error) {
        console.error("Error While ")
    }
})

export default ItemEndpoint;