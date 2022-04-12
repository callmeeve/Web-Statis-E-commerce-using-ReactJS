const Gallery = () => {
    return (
        <div className="container">
            <h1 className="text-dark text-center text-lg-start mt-4 mb-0">Our Gallery</h1>
            <hr className="mt-2 mb-5" />
            <div className="row text-center text-lg-start">
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1552566626-dead1fd56ae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1572302920907-288481a7835e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Gallery;