import item from "../Models/items.ts";



class ItemsController {
    constructor() {

    }


    async addItem(params:""){
        try {
            const newItem = new item(params);
            await newItem.save();
            console.log("Item Saved Successfully");
            return {success:true};
        } catch (error) {
            console.error("Error While Adding Saving Item, ", error);
            return {success:false};
        }
    }

};

export default ItemsController;


