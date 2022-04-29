import React from "react";




function foot() {
    return <div className="right" >

        <div className="navbar">
            <img class="img" src="images/search.jpg" alt="" srcset="" />


        </div>
        <div className="grid-container">
            <div className="grid-item item1">
                <div className="item1-left">
                    <h3>Welcome back</h3>
                    <h3>Minimal Ui!</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus officiis
                        assumenda consectetur provident alias? Dolorem?</p>
                    <button type="button" className="btn btn-success">Go Now</button>
                </div>
                <div>
                    <img style={{ height: '210px' }} className="img" src="images/tut.jpg" alt="" srcset="" />
                </div>
            </div>


            <div id="carouselExampleCaptions" class="grid-item item2 carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div style={{ borderRasius: '15px' }} className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/stock.jpeg" class="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">

                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/stock.jpeg" class="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/stock.jpeg" class="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">

                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>

}
export default foot;
