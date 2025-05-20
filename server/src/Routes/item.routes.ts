import express from 'express';
import ItemsController from '../Controllers/item.controller.ts';

const ItemEndpoint = express.Router();

ItemEndpoint.post('/addItem', async (req, res) => {
    try {
        const data = req.body;
        const IC = new ItemsController();
        const result = await IC.addItem(data);
        if (!result.success) {
            res.status(400).send({ message: 'Failed to add item' });
            return;
        }
        res.status(201).send(result);
    } catch (error) {
        console.error("Error In Function/Endpoint, ", error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

export default ItemEndpoint;