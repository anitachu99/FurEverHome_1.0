import { NavLink } from "react-router-dom";
import fur from "./images/feh_logo.png";
import style from "./styling/NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.container}>
                <img src={fur} className={style.logo} alt="logo" style={{ width: 100, height: 100 }}/>
                <div className={style.elements}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/Adopt">Adopt</a>
                        </li>
                        <li>
                            <a href="/Faq">Faq</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar