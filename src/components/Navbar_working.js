import React, { useState } from 'react';
import './Navbar.css'; // Assuming your CSS is still in the same directory
import { Link } from "react-router-dom";

const App = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { name: 'Home', icon: 'home-outline', link: '/home' },
        { name: 'About', icon: 'person-outline', link: '/about' },
        { name: 'Projects', icon: 'chatbubble-outline', link: '/projects' },
        { name: 'Contact', icon: 'camera-outline', link: '/contact' },

    ];

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="navigation">
            <ul>
                {menuItems.map((item, index, link) => (
                    <li
                        key={index}
                        className={`list ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        <Link to={item.link}>
                            <span className="icon">
                                <ion-icon name={item.icon}></ion-icon>
                            </span>
                            <span className="text">{item.name}</span>
                        </Link>
                    </li>
                ))}
                <div className="indicator"></div>
            </ul>
        </div>
    );
};

export default App;