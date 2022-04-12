const Product = (props) => {
    return (
        <div>
            <div className="card">
                <img src= {props.image} className="card-img-top" alt="Card Image" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-dark">{props.judul}</h5>
                    <p className="card-text text-muted mb-4">{props.isi}</p>
                    <a href="#" className="btn btn-danger text-white mt-auto align-self-start">Order Now</a>
                </div>
            </div>

        </div>
    );
}

export default Product