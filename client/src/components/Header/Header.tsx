import './Header.css';
import Logo from '../../../public/Invencio.png';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <Image className="header-logo" src={Logo} alt='10'/>
            <h1>Invencio</h1>

        </header>
    )
};

export default Header;