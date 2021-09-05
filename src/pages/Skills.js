import designIcon from "../components/designIcon.png"
import developerIcon from "../components/developerIcon.svg"
import codeIcon from "../components/codeIcon.png"

const Skills = () => {
    return (
        <div className="skills">
           <span>Skills</span>
            <h2>Programming Skills in life</h2>
            <div className="row">
                <div className="skillsBox">
                    <img src={designIcon} width="10%"/>
                    <h3>Designer</h3>
                    <span>I value simple content structure, clean design patterns, and thoughtful interactions.</span>
                    <h4>Things I enjoy designing</h4>
                    <span>UI, Web, Mobile, Apps, Logos</span>
                    <h4>Design Tools:</h4>
                    <span>Figma, Adobe Xd, Paper, Sketch, Adobe Photoshop, Adobe Illustrator</span>
                </div>
                <div className="skillsBox">
                    <img src={developerIcon} width="10%"/>
                    <h3>Developer</h3>
                    <span>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</span>
                    <h4>Languages I speak</h4>
                    <span>HTML, CSS, Sass</span>
                    <h4>Dev Tools:</h4>
                    <span>Atom, React, Bootstrap, Bulma, Github, Gitlab, Terminal, Firebase</span>
                </div>
                <div className="skillsBox">
                    <img src={codeIcon} width="10%"/>
                    <h3>Coder</h3>
                    <span>I genuinely care about people, and love helping fellow designers work on their craft.</span>
                    <h4>Languages I speak</h4>
                    <span>Java, Javascript, Python, Mongo DB, Node js</span>
                    <h4>Design Tools:</h4>
                    <span>Figma, Adobe Xd, Paper, Sketch, Adobe Photoshop, Adobe Illustrator</span>
                </div>
            </div>
        </div>
    )   
}

export default Skills