'use client';

import Link from "next/link";
import './Home.css';



const HomeComponent = () => {
    return (
        <div className="home-page">
            <div className="Functions">
                <Link href="/AddItem"><button>Add Item</button></Link>
            </div>

        </div>
    )
};

export default HomeComponent;