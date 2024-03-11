
import { Link } from "react-router-dom"

function HeaderBottom(){
    return(
        <div className="d-flex bgDarkest align-items-center justify-content-start textWhite border-0 py-1" style={{fontSize:'0.8em'}}>
            
            <Link to="/productsListing">
            <div className="d-inline-block text-center px-3 text-decoration-none textWhite" style={{borderRight:'solid 1px  rgba(100, 166, 243, 0.75)'}}>
                Categories
            </div>
            </Link>

            <Link exact to="/productsListing" className="d-inline-block mx-3 text-decoration-none textWhite">
                Headphones
            </Link>

            <Link exact to="/productsListing" className="d-inline-block mx-3 text-decoration-none textWhite">
                Laptops
            </Link>

            <Link exact to="/productsListing" className="d-inline-block mx-3 text-decoration-none textWhite">
                RAM
            </Link>

            <Link exact to="/productsListing" className="d-inline-block mx-3 text-decoration-none textWhite">
                Chargers
            </Link>

            <Link exact to="/productsListing" className="d-inline-block mx-3 text-decoration-none textWhite">
                Mobiles
            </Link>

            <Link exact to="/productsListing" className="d-inline-block mx-3 text-decoration-none textWhite">
                Headphones
            </Link>

            <Link exact to="/productsListing" className="d-inline-block mx-3 text-decoration-none textWhite">
                Laptops
            </Link>

            <Link exact to="/productsListing" className="d-inline-block mx-3 text-decoration-none textWhite">
                RAM
            </Link>

            <Link exact to="/productsListing" className="d-inline-block mx-3 text-decoration-none textWhite">
                Chargers
            </Link>

            <Link exact to="/productsListing" className="d-inline-block mx-3 text-decoration-none textWhite">
                Mobiles
            </Link>
        

        </div>
    )
}

export default HeaderBottom
