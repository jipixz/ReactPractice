import React from "react"

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" alt="test" src="https://ed-grid.com/assets/img/utils/grid.svg" />
            <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Mi primer curso</p>
            <p>Algún día será una página web</p>
            <a href="https://www.google.com" className="button">Comprar</a>
            </div>
        </div>
        </div>
    </div>
)

export default Banner