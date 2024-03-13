import "./Navbar.css"
import "./Button"
import { Button } from "./Button";
function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div>
                <img src="https://flowbite.com/docs/images/logo.svg"/>
                <span>GeekFoods</span>
            </div>
            <div className='nav-linK'>
                <div>
                    <span>Home</span>
                </div>
                <div><span>Quote</span></div>
                <div><span>Resturants</span></div>
                <div><span>Foods</span></div>
                <div><span>Contact</span></div>
            </div>
            <div>
                <Button backgroundKaColor={"rgb(74, 74, 203)"} fontColor={"#fff"}>Get Started</Button>
            </div>
        </nav>
        </>
    )
}
export default Navbar;