import project1 from "../components/project1.jpg"
import project2 from "../components/project2.jpg"
import project3 from "../components/porject2.jpg"
import project4 from "../components/project3.jpg"
import project5 from "../components/project4.jpg"
import project6 from "../components/project5.jpg"

const Project = () => {
    
    function Website(e) {
        e.preventDefault();
        [...document.querySelectorAll('.website')].map(x => console.log(x.style.display = "flex"))
        document.querySelector('.moblie').style.display = "none";
    }

    function Moblie(e) {
        e.preventDefault();
        [...document.querySelectorAll('.website')].map(x => console.log(x.style.display = "none"))
        document.querySelector('.moblie').style.display = "flex";
    }

    return (
        <div className="project">
            <span>Portfolio</span>
            <h2>WORK I have Done</h2>
            <div className="row">
                <button onClick={Website}>All</button>
                <button onClick={Website}>Website Design</button>
                <button onClick={Moblie}>Moblie App</button>
            </div>
            <div className='row website'>
                <div className='projectBox'>
                    <a href='https://greats-website-waikit.netlify.app/'>
                        <div className="overlay">
                            <h3>GREATS</h3>
                        </div>
                    </a>
                    <img src={project1}/>
                </div>
                <div className='projectBox'>
                    <a href='https://277-fifth-ave-waikit.netlify.app/'>
                        <div className="overlay">
                            <h3>277 5TH AVE</h3>
                        </div>
                        <img src={project2}/>
                    </a>
                </div>
                <div className='projectBox'>
                    <a href='https://doddle-waikit.netlify.app/'>
                        <div className="overlay">
                            <h3>DODDLE</h3>
                        </div>
                        <img src={project3}/>
                    </a>
                </div>
            </div>
            <div className='row website'>
                <div className='projectBox'>
                    <a href='https://start-bootstrap-waikit.netlify.app/'>
                        <div className="overlay">
                            <h3>PORTFOLIO WEBSITE</h3>
                        </div>
                        <img src={project4}/>
                    </a>
                </div>
                <div className='projectBox'>
                    <a href='https://links-book-waikit.netlify.app/'>
                        <div className="overlay">
                            <h3>LINKSBOOK</h3>
                        </div>
                        <img src={project5}/>
                    </a>
                </div>
                <div className='projectBox'>
                    <a href='https://fai-wealth-manegement-waikit.netlify.app/'>
                        <div className="overlay">
                            <h3>START BOOTSTRAP 2</h3>
                        </div>
                        <img src={project6}/>
                    </a>
                </div>
            </div>
            <div className='row moblie'>
                <div className="projectBox">
                    <h1>I don't have this mobile app for the moment, I will add it in the future.</h1>
                </div>
            </div>
        </div>
    )   
}

export default Project