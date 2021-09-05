import Forwardschool from "../components/forward.svg"
import Youtube from "../components/youtube.png"
import Udemy from "../components/udemy.svg"

const education = () => {
    return (
        <div className="skills">
            <span>Education</span>
            <h2>Education process of learning</h2>
            <div className="row">
                <div className="skillsBox">
                    <img src={Forwardschool} width="20%"/>
                    <h3>Forward School</h3>
                    <span>I'm currently pursuing a Diploma in Software Engineering</span>
                    <h4>Things I enjoy</h4>
                    <span>Very friendly, Nice environment, Class methods</span>
                    <h4>When</h4>
                    <span>Still Studying, Started in 2020</span>
                </div>
                <div className="skillsBox">
                    <img src={Youtube} width="10%"/>
                    <h3>Youtube</h3>
                    <span>Can attend free classese, learn from different people about programming skills</span>
                    <h4>Youtuber Recommend</h4>
                    <span>Aaron Jack, Mosh, 鬍子Jack, Joma Tech, Devon Crawford</span>
                    <h4>When</h4>
                    <span>Start learning in 2014</span>
                </div>
                <div className="skillsBox">
                    <img src={Udemy} width="10%"/>
                    <h3>Udemy</h3>
                    <span>Open online course provider aimed at professional adults and students.</span>
                    <h4>Thing I enjoy</h4>
                    <span>Lifetime Access. Over 130,000 Courses, Good prices, 60+ Languages.</span>
                    <h4>When</h4>
                    <span>Start learning in 2020</span>
                </div>
            </div>
        </div>
    )   
}

export default education