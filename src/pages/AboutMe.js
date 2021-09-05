import cv from '../components/Resume.png'
import personalPicture from '../components/personalPicture.jpg'

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <div className="AboutBox">
                <h1>Expert Web Developer &amp; Software Engineer</h1>
                <h2>About Me</h2>
                <h3>My Name's Kelvin Wong and I'm currently a student studying at Forward School pursuing my Diploma in Software Engineering and have a passion for software engineering to pursue further in this career. I enjoy turning complex problems into simple, beautiful and intuitive designs. Sometime will creating small websites and learning new skills or technology to implement into my work.</h3>

                <h3>When I studying in highschool, I'm a decadent student. What do I want to be in the future. Until I met a sir who let me find my own future, he bring me along this section of the road. That made me realize what programming is....</h3>
                <a href={cv} download>DOWNLOAD CV</a>
            </div>
            <div className="AboutBox img">
                <img src={personalPicture} width="60%"/>
            </div>
        </div>
    )   
}

export default AboutMe