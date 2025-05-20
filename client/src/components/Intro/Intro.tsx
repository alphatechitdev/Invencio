import Link from "next/link";
import './Intro.css';



const Intro = () => {

    return (
        <div className="intro-page">
            <div className="hero">
                <h1>Invencio</h1>
                <strong>The Inventory Maanger You Need</strong>

            </div>

            <div className="CTA">
                <Link href="/Login"><button>Login To Continue Managing</button></Link>
                <Link href="/Register"><button>Get Your Own Account</button></Link>
            </div>


            <div className="features">
                <ul>
                    <li>Secure & Fast</li>
                    <li>Easy To Understand & Operate</li>
                </ul>
            </div>
        </div>
    )
};

export default Intro;