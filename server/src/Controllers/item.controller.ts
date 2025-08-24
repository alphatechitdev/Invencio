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

    async getCategories() {
        try {
            const categories = await item.distinct('type');
            return {success:true, categories:categories};
        } catch (error) {
            console.error("Error While Fetching Item Categories", error);
            return {success:false, categories:null};
        }
    }

    async getItems(category:string) {
        try {
            const items = await item.find({type:category});
            return {success:true, items:items};
        } catch (error) {
        console.error("Error While Fetching Items", error);
        return {success:false, items:null}
        }
    }

};

export default ItemsController;


