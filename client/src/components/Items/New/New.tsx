import { useState } from "react"



const AddItem = () => {
    const [item, setItem] = useState({
    sku:'',
    name:'',
    type:'',
    quantity:0,
    batchNumber:0,
    location:'',
    expiryDate:'',
    });

    const handleChange = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setItem((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="add-item-page">
            <div className="item-add-form-container">
                <form>
                    <label>Name:</label>
                    <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={handleChange}
                    />
                    <label>Type:</label>
                    <input
                    type="text"
                    name="type"
                    value={item.type}
                    onChange={handleChange}
                    placeholder="Enter Type"
                    />
                    <label>Quantity:</label>
                    <input
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={handleChange}
                    placeholder="Enter Quantity"
                    />

                    <label>Batch Number:</label>
                    <input
                    type="number"
                    name="batchNumber"
                    value={item.batchNumber}
                    onChange={handleChange}
                    placeholder="Enter Batch Number"
                    />

                    <label>Location</label>
                    <input
                    type="text"
                    name="location"
                    value={item.location}
                    onChange={handleChange}
                    placeholder="Enter Location"
                    />

                    <label>Expiry Date:</label>
                    <input
                    type="date"
                    name="expiryDate"
                    value={item.expiryDate}
                    onChange={handleChange}
                    placeholder="Enter Expiry Date"
                    />
                </form>
            </div>
        </div>
    )
}


export default AddItem;