'use client';

import axios from "axios";
import { useEffect, useState } from "react"


const Index = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const resposnse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/items`)
            }
            catch (error) {
                console.error("Error While Fetching Items", error);
            }
        }
    })

    return (
        <div className="index-page">
            <div className="items-inventory">
                <div>

                </div>

            </div>
        </div>
    )
};


export default Index;