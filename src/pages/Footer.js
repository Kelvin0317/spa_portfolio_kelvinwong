import logo from '../components/Logo_SPA.png'
import Facebook from '../components/facebookCircular.png'
import Twitter from '../components/instagramCircular.png'
import Instagram from '../components/twitterCircular.png'
import Github from '../components/github.svg.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <img src={logo} width="40px"/>
            </div>
            <div className="row">
                <a href="https://www.facebook.com/profile.php?id=100008300861540"><img src={Facebook} width="40px"/></a>
                <a hred="https://ads.twitter.com/login"><img src={Twitter} width="40px"/></a>
                <a hred="https://www.instagram.com/kelvin0317/?hl=en"><img src={Instagram} width="40px"/></a>
                <a href="https://github.com/Kelvin0317"><img src={Github} width="40px"/></a>
            </div>
            <div className="row">
                {/* <small>© 2020, Kelvin Wong</small> */}
                <small>© 2020, Kelvin Wong. All Rights Reserved.</small>
            </div>
        </div>
    )   
}

export default Footer