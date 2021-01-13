import React from "react";
import Seasons from "../Seasons/Seasons";
import "./MainPage.scss";

const MainPage = () => {
    return (
        <div className="div-bg">
            <p>ANIMEtrics<br />
            For My Hero Academia Fanatics
            </p>
            <section>
                <Seasons />
                <Seasons />
                <Seasons />
                <Seasons />
                <Seasons />
            </section>
        </div>
    )
}

export default MainPage;