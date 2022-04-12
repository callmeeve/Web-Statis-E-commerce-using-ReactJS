import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Product from "../components/Product"
import Home from "../components/Home"
import Form from "../components/Form"
import Gallery from "../components/Gallery"

const daftarProduk = [
  {image: "../image/produk/1.png" ,judul : "Seafood Noodles", isi : "Always Fresh, Always Good"},
  {image: "../image/produk/2.png" ,judul : "Salad with Octopus", isi : "Healthy and Fresh Food"},
  {image: "../image/produk/3.png" ,judul : "Seafood Soup", isi : "The Nice Aroma of Fresh Seafood"},
  {image: "../image/produk/4.png" ,judul : "Baby Oct", isi : "The Twinnie Minnie Baby Octopus"},
];

function App() {
  return (
    <div>
      <Nav/>
      <Home />
      <br />
      <div className="container">
        <h3 class="text-dark border-bottom mt-3 mb-4">Our Products</h3>
        <div className="row justify-content-center">
          {daftarProduk.map((agt, indeks)=>(
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" id="product">
              <Product image={agt.image} judul={agt.judul} isi={agt.isi}/>
            </div>
          ))}
        </div>
      </div>
      <br />
      <Gallery />
      <br />
      <Form />
      <Footer/>
    </div>
  )
}

export default App