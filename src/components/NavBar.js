import Download from "./NavBar-Download";
import Howto from "./NavBar-HowTo";
import About from "./NavBar-About";
import Popup from 'reactjs-popup';
import SearchBox from "./NavBar-SearchBox";

function NavBar({handleChange}) {
    return (
        <div>
            <section className="topnav">
                <a href="#"><i><b>Visit UNESCO</b></i></a>
                <Popup trigger={<a href="#">About</a>} modal>
                    <About/>
                </Popup>
                <Popup trigger={<a href="#">How to</a>} modal>
                    <Howto/>
                </Popup>
                <Popup trigger={<a href="#">Download</a>} modal>
                    <Download/>
                </Popup>
                <SearchBox handleChange={handleChange} />
            </section>
        </div>
    )
}

export default NavBar;