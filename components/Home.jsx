const Home = () => {
    return (
        <div>
            <main>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-label="Slide 1" aria-current="true" />
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" className />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="bd-placeholder-img" width="100%" height="750px" src="./image/2.png" aria-hidden="true" focusable="false"></img>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Promo besar - besaran</h1>
                                <p>Dapatkan promo nya di outlet terdekat</p>
                                <p><a className="btn btn-lg btn-danger" href="#">Order Now</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img className="bd-placeholder-img" width="100%" height="750px" src="./image/1.png" aria-hidden="true" focusable="false"></img>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Soft Opening</h1>
                                <p>Pada tanggal 18 Desember 2023 - 19 Desember 2023</p>
                                <p><a className="btn btn-lg btn-danger" href="#">Order Now</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </main>
        </div>
    );
}

export default Home;