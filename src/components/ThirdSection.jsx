import React from "react";
import pic01 from "../images/pic01.jpg"
import pic02 from "../images/pic02.jpg"
import pic03 from "../images/pic03.jpg"
import pic04 from "../images/pic04.jpg"
import pic05 from "../images/pic05.jpg"
import pic06 from "../images/pic06.jpg"





export default function ThirdSection(){
    return(
        <section>
            <header className="major">
                <h2>Ipsum sed dolor</h2>
            </header>
            <div className="posts">
                <article>
                    <a href="#" className="image">
                        <img src={pic01} alt="" />
                    </a>
                    <h3>Interdum aenean</h3>
                    <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                        <li>
                            <a href="#" className="button">More</a>
                        </li>
                    </ul>
                </article>
                <article>
                    <a href="#" className="image">
                        <img src={pic02} alt="" />
                    </a>
                    <h3>Nulla amet dolore</h3>
                    <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                        <li>
                            <a href="#" className="button">More</a>
                        </li>
                    </ul>
                </article>
                <article>
                    <a href="#" className="image">
                        <img src={pic03} alt="" />
                    </a>
                    <h3>Tempus ullamcorper</h3>
                    <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                        <li>
                            <a href="#" className="button">More</a>
                        </li>
                    </ul>
                </article>
                <article>
                    <a href="#" className="image">
                        <img src={pic04} alt="" />
                    </a>
                    <h3>Sed etiam facilis</h3>
                    <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                        <li>
                            <a href="#" className="button">More</a>
                        </li>
                    </ul>
                </article>
                <article>
                    <a href="#" className="image">
                        <img src={pic05} alt="" />
                    </a>
                    <h3>Feugiat lorem aenean</h3>
                    <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                        <li>
                            <a href="#" className="button">More</a>
                        </li>
                    </ul>
                </article>
                <article>
                    <a href="#" className="image">
                        <img src={pic06} alt="" />
                    </a>
                    <h3>Amet varius aliquam</h3>
                    <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                    <ul className="actions">
                        <li>
                            <a href="#" className="button">More</a>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}