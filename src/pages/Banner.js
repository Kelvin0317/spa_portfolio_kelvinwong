import banner from '../components/banner.jpg'
import facebookIcon from '../components/facebook.png'
import instagramIcon from '../components/instagram.png'
import twitterIcon from '../components/twitter.png'
const Banner = () => {
    return (
        <div className="banner">
            <div className="bannerLine">
            </div>
            <div className="bannertext">
                <h4>I AM  KELVIN WONG</h4>
                <h2>Software Engineer</h2>
                <button>Contact me</button>
            </div>
            <div className="social">
                <ul>
                    <a href="https://www.facebook.com/profile.php?id=100008300861540"><li>
                        <img src={facebookIcon}/>
                    </li></a>
                    <a href="https://www.instagram.com/kelvin0317/?hl=en"><li>
                        <img src={instagramIcon}/>
                    </li></a>
                    <li>
                        <img src={twitterIcon}/>
                    </li>
                </ul>
            </div>
            <img src={banner}/>
        </div>
    )   
}

export default Banner