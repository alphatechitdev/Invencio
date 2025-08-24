'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import './Index.css';

const Index = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [searchCategory, setSearchCategory] = useState<string | null>(null);
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/item/getCategories`);
                setCategories(response.data.categories);
            } catch (error) {
                console.error("Error While Fetching Categories:", error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        if (!searchCategory) return;

        const fetchItems = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/item/getItems/${searchCategory}`);
                setItems(response.data.items);
            } catch (error) {
                console.error("Error While Fetching Items:", error);
            }
        };
        fetchItems();
    }, [searchCategory]);

    return (
        <div className="index-page">
            <div className="categories">
                <h2>Categories:</h2>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index} onClick={() => setSearchCategory(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="items-inventory">
                <h2>{searchCategory ? `Items in "${searchCategory}"` : "Select a Category"}</h2>
                {items.length > 0 ? (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <strong>{item.name}</strong> — Qty: {item.quantity}
                            </li>
                        ))}
                    </ul>
                ) : searchCategory ? (
                    <p>No items found.</p>
                ) : (
                    <p>Please select a category to view items.</p>
                )}
            </div>
        </div>
    );
};

export default Index;
