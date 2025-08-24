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
        res.status(500).json({ message: 'Internal server error' });
    }
});

ItemEndpoint.get('/getItems/:category', async (req, res) => {
    try {
        const category = req.params.category
        const IC = new ItemsController();
        const result = await IC.getItems(category);
        if(!result.success){
            res.status(400).json({success:false})
        } else {
            res.status(200).json(result);
        }
    } catch(error) {
        console.error("Error In getItems Function/Endpoint, ", error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

ItemEndpoint.get('/getCategories', async (req, res) => {
    try {
        const IC = new ItemsController();
        const result = await IC.getCategories();
        if(!result.success) {
            res.status(400).json({success:false})
        } else {
            res.status(200).json(result)
        }
    } catch (error) {
        console.error("Error In getCategories Function/Endpoint, ", error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

export default ItemEndpoint;