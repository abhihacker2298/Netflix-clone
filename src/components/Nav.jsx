import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else { handleShow(false); }
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className='nav_logo'
                src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg"
                alt='Netflix logo'
            />

            <img 
                className='nav_avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='Profile'
            />
        </div>
    )
}

export default Nav;