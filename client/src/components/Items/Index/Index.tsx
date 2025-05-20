import { useState } from "react"



const Index = () => {
    const [items, setItems] = useState({

    })

    return (
        <div className="index-page">
            <div className="index-inventory">
                {items.map((item) => {

                })}
            </div>
        </div>
    )
};


export default Index;