import Links from "component/navComponent/Navbar";
import React from "react";
import style from "./Header.module.css"

const Header = () => {

    return (
        <React.Fragment>
            <header className={style.wrapper}>
            <h1> Bergamotte </h1>
                <Links></Links>
        </header>
        </React.Fragment>

        // ou <header> <Nav> </header>

    )


}

export default Header;