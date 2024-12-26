import React, { useState, useEffect } from "react";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true); // State to manage ul visibility

    // Function to check window width
    const checkWindowSize = () => {
        if (window.innerWidth <= 1200) {
            setIsVisible(false); // Set to not visible when width is 1200px or less
        } else {
            setIsVisible(true); // Set to visible when width is greater than 1200px
        }
    };

    // Use effect to handle resize event
    useEffect(() => {
        // Check the window size on component mount
        checkWindowSize();

        // Add the resize event listener
        window.addEventListener("resize", checkWindowSize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", checkWindowSize);
        };
    }, []); // Empty dependency array to run only on mount/unmount

    return (
        <header id="demo-header">
            <div className="left"> 
                <h1>
                    <span>Massively</span>
                </h1>
                <ul className={`selector ${!isVisible ? 'none' : ''}`}>
                    <li className="active">Desktop</li>
                    <li data-width="1040" data-height="768">Tablet</li>
                    <li data-width="788" data-height="1000">Tablet (Portrait)</li>
                    <li data-width="375" data-height="568">Mobile</li>
                </ul>
                <div className="action">
                    <a href="#" className="btn popout alt2 offsite icon-1 icon-popout solo" target="_blank" rel="noopener noreferrer" aria-label="Open in new tab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>
                </div> 
            </div>
            <div className="right">
                <ul className="share">
                    <li className="fb-like">
                        <div className="fb-like" data-send="false" data-layout="button" data-width="100" data-show-faces="true"></div>
                    </li>
                    <li className="twitter">
                        <a href="#" className="twitter-share-button" data-url="https://html5up.net/massively" data-text="Massively: A free fully responsive HTML5/CSS3 site template" data-count="horizontal">Tweet</a>
                    </li>
                </ul>
                <div className="action">
                    <a href="/" className="btn back alt2">Back</a>
                    <a href="#" className="btn alt download on" data-name="massively" data-title="Massively">
                        Download 
                        <em>(565,906)</em>
                    </a>
                </div>
            </div>
        </header>
    );
}