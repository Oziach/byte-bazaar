import ProductCard from "./ProductCard";
import boatHeadphones from "../img/boatHeadphones.png"

function LandingProductsListing(){

    return(
        <div className="ps-2 row container-fluid">

            <div className="mb-3 py-2 bgDarker">
            <div className="d-flex">
             <h3 className="borderBottomOrange d-inline-block pb-1 mb-2">Buy Products</h3>
             <div className="textOrange d-inline-block ms-auto me-5"><u>View all</u></div>
            </div>
            

            <div className="row my-3">
                <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                    price = {5000} image={boatHeadphones} rating={4.3} className=''/>
                <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                    price = {5000} image={boatHeadphones} rating={4.3} className=''/>
                <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                    price = {5000} image={boatHeadphones} rating={4.3} className=''/>
                <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                    price = {5000} image={boatHeadphones} rating={4.3} className=''/>
            </div>
            </div>

            <div classNmae = "mb-3 py-2">
            <div className="d-flex">
             <h3 className="borderBottomOrange d-inline-block pb-1 mb-2">Rent Products</h3>
             <div className="textOrange d-inline-block ms-auto me-5"><u>View all</u></div>
            </div>
            
            <div className="row my-3">
            <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                    price = {5000} image={boatHeadphones} rating={4.3} className=''/>
                <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                    price = {5000} image={boatHeadphones} rating={4.3} className=''/>
            </div>
            </div>

            <div className="mb-3 py-2 bgDarker">
            <div className="d-flex">
             <h3 className="borderBottomOrange d-inline-block pb-1 mb-2">Buy second-hand</h3>
             <div className="textOrange d-inline-block ms-auto me-5"><u>View all</u></div>
            </div>
            
            <div className="row my-3">
            <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                    price = {5000} image={boatHeadphones} rating={4.3} className=''/>
            </div>
            </div>

        </div>

    )
}

export default LandingProductsListing;