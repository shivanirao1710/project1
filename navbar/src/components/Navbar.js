import {FaBars,FaTimes} from "react-icons/fa";
import {useRef} from 'react';
import '../Styles/main.css';
function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return( 
        <header>
            <h3>LinkedIn</h3>
            
            <nav ref={navRef}>
                <a href='/#'>Office</a>
                <a href='/#'>Windows</a>
                <a href='/#'>Support</a>
                <a href='/#'>Microsoft365</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );

}
export default Navbar