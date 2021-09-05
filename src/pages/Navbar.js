import Home from '../components/menu.jpg'
import About from '../components/about.jpg'
import Skills from '../components/skills.jpg'
import won from '../components/a.jpg'
import Contact from '../components/contact.jpg'
import closeIcon from '../components/close.png'


    const Navbar = ({ show }) => {
    function handleClick(e) {
        e.preventDefault();
        document.querySelector(".sideNav").style.left = "-100%";
    }

    function Hover(e) {
        e.preventDefault();
        document.querySelector(".sideNav").style.left = "65%";
        document.querySelector(".closeButton").style.display = "block";
    }

    function notHover(e) {
        e.preventDefault();
        document.querySelector(".sideNav").style.left = "95.45%";
        document.querySelector(".closeButton").style.display = "block";
    }


    return (
        <div className={show ? "sideNav active" : "sideNav"}>
            <ul onMouseOver={Hover} onMouseOut={notHover}>
                <li>
                    <a className="menuBox" href="/"><img src={Home} width="400"/>
                    <ul>
                        <li><h2>H</h2></li>
                        <li><h2>O</h2></li>
                        <li><h2>M</h2></li>
                        <li><h2>E</h2></li>
                    </ul>
                    </a> 
                </li>
                <li>
                    <a className="menuBox" href="/"><img src={About} width="400"/>
                    <ul>
                        <li><h2>A</h2></li>
                        <li><h2>B</h2></li>
                        <li><h2>O</h2></li>
                        <li><h2>U</h2></li>
                        <li><h2>T</h2></li>
                    </ul>
                    </a> 
                </li>
                <li>
                    <a className="menuBox" href="/"><img src={Skills} width="400"/>
                    <ul>
                        <li><h2>S</h2></li>
                        <li><h2>K</h2></li>
                        <li><h2>I</h2></li>
                        <li><h2>L</h2></li>
                        <li><h2>L</h2></li>
                    </ul>
                    </a> 
                </li>
                <li>
                    <a className="menuBox" href="/"><img src={won} width="400"/>
                    <ul>
                        <li><h2>-</h2></li>
                        <li><h2>W</h2></li>
                        <li><h2>O</h2></li>
                        <li><h2>n</h2></li>
                        <li><h2>-</h2></li>
                    </ul>
                    </a> 
                </li>
                <li>
                    <a className="menuBox" href="/"><img src={Contact} width="400"/>
                    <ul>
                        <li><h5>C</h5></li>
                        <li><h5>O</h5></li>
                        <li><h5>N</h5></li>
                        <li><h5>T</h5></li>
                        <li><h5>A</h5></li>
                        <li><h5>C</h5></li>
                        <li><h5>T</h5></li>
                    </ul>
                    </a> 
                </li>
            </ul>
            <a className="closeButton" onClick={handleClick} ><img src={closeIcon} width='30'/></a> 
        </div>
    )   
}

export default Navbar