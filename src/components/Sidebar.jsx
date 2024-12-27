import React, { useState, useEffect } from "react";
import pic07 from "../images/pic07.jpg";
import pic08 from "../images/pic08.jpg";
import pic09 from "../images/pic09.jpg";
import "../styles.css";

export default function Sidebar() {
    // State to manage sidebar's active/inactive class
    const [isActive, setIsActive] = useState(true);
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Track active submenu
    const [isFixed, setIsFixed] = useState(false); // Manage the 'p-fixed' class for inner div

    // Toggle the sidebar's active state
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    // Toggle the active submenu
    const toggleSubmenu = (submenu) => {
        setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
    };

    // Function to check window width
    const checkWindowSize = () => {
        if (window.innerWidth <= 1280) {
            setIsActive(false); // Set to inactive when width is 1280px or less
        } else {
            setIsActive(true); // Set to active when width is greater than 1280px
        }
    };

    // Scroll event handler
    const handleScroll = () => {
        const sidebar = document.getElementById('sidebar');
        const inner = sidebar?.querySelector('.inner'); // Use optional chaining to avoid null issues
        const mainContent = document.getElementById('main'); // Ensure this ID matches your main content's actual ID

        if (!sidebar || !inner || !mainContent) {
            return; // Exit if any element is not found
        }

        const sidebarHeight = sidebar.offsetHeight; // Height of the sidebar
        const sidebarOffsetTop = sidebar.getBoundingClientRect().top; // Sidebar top offset
        const windowScrollY = window.scrollY; // Current scroll position
        const mainContentBottom = mainContent.getBoundingClientRect().bottom; // Bottom of your main content

        // Check the conditions to set p-fixed class
        if (windowScrollY > (sidebarHeight + sidebarOffsetTop) && windowScrollY < mainContentBottom) {
            setIsFixed(true); // Add p-fixed class
        } else {
            setIsFixed(false); // Remove p-fixed class
        }
    };

    // Use effect to handle resize and scroll events
    useEffect(() => {
        checkWindowSize(); // Check the window size on component mount
        window.addEventListener("resize", checkWindowSize); // Add resize event listener
        window.addEventListener("scroll", handleScroll); // Add scroll event listener

        // Cleanup the event listeners on component unmount
        return () => {
            window.removeEventListener("resize", checkWindowSize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array to run only on mount/unmount

    return (
        <div id="sidebar" className={isActive ? "" : "inactive"}>
            <div className={`inner ${isFixed ? "p-fixed" : ""}`}>
                <section id="search" className="alt">
                    <form action="" method="post">
                        <input type="text" name="query" id="query" placeholder="Search" />
                    </form>
                </section>
                <nav id="menu">
                    <header className="major">
                        <h2>Menu</h2>
                    </header>
                    <ul>
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">Generic</a></li>
                        <li><a href="#">Elements</a></li>
                        <li>
                            <span
                                className={`opener ${activeSubmenu === 'submenu1' ? 'active' : ''}`}
                                onClick={() => toggleSubmenu('submenu1')}
                            >
                                Submenu
                            </span>
                            <ul className={activeSubmenu === 'submenu1' ? 'active' : ''}>
                                <li><a href="#">Lorem Dolor</a></li>
                                <li><a href="#">Ipsum Adipiscing</a></li>
                                <li><a href="#">Feugiat Veroeros</a></li>
                                <li><a href="#">Tempus Magna</a></li>
                            </ul>
                        </li>
                        <li><a href="">Etiam Dolore</a></li>
                        <li><a href="#">Adipiscing</a></li>
                        <li>
                            <span
                                className={`opener ${activeSubmenu === 'submenu2' ? 'active' : ''}`}
                                onClick={() => toggleSubmenu('submenu2')}
                            >
                                Another Submenu
                            </span>
                            <ul className={activeSubmenu === 'submenu2' ? 'active' : ''}>
                                <li><a href="#">Lorem Dolor</a></li>
                                <li><a href="#">Ipsum Adipiscing</a></li>
                                <li><a href="#">Tempus Magna</a></li>
                                <li><a href="#">Feugiat Veroeros</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Maximus Erat</a></li>
                        <li><a href="#">Sapien Mauris</a></li>
                        <li><a href="#">Amet Lacinia</a></li>
                    </ul>
                </nav>
                <section>
                    <header className="major">
                        <h2>Ante interdum</h2>
                    </header>
                    <div className="mini-posts">
                        <article>
                            <a href="#" className="image">
                                <img src={pic07} alt="" />
                            </a>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                        <article>
                            <a href="#" className="image">
                                <img src={pic08} alt="" />
                            </a>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                        <article>
                            <a href="#" className="image">
                                <img src={pic09} alt="" />
                            </a>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                    </div>
                    <ul className="actions">
                        <li>
                            <a href="#" className="button">More</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <header className="major">
                        <h2>Get in touch</h2>
                    </header>
                    <p>
                        Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
                        Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="contact">
                        <li className="icon solid fa-envelope">
                            <a href="#">information@untitled.tld</a>
                        </li>
                        <li className="icon solid fa-phone">
                            <a href="#">(000) 000-0000</a>
                        </li>
                        <li className="icon solid fa-home">
                            1234 Somewhere Road #8254
                            <br />
                            Nashville, TN 00000-0000
                        </li>
                    </ul>
                </section>
                <footer id="footer">
                    <p className="copyright">
                        © Untitled. All rights reserved. Demo Images:
                        <a href="#"> Unsplash</a>
                        . Design:
                        <a href="#"> HTML5 UP</a>
                    </p>
                </footer>
            </div>
            <a href="#" className="toggle" onClick={toggleSidebar}>Toggle</a>
        </div>
    );
}