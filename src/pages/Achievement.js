import Compost4Life from '../components/Compost4Life.jpg'
import image1 from '../components/compost4lifewin.jpg'
import image2 from '../components/compost.jpg'
import image3 from '../components/compost1.jpg'
import image4 from '../components/compost2.jpg'
import image5 from '../components/compost3.jpg'
import image6 from '../components/compost4.jpg'
import image7 from '../components/compost5.jpg'
import image8 from '../components/compost6.jpg'
import image9 from '../components/compost7.jpg'
import image10 from '../components/compost8.jpg'
import image11 from '../components/compost9.jpg'
import image12 from '../components/compost19.jpg'
import gold from '../components/goldIcon.png'
import silver from '../components/silverIcon.png'
import Carousel from "react-multi-carousel";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";


const Achievement = () => { 
    const [image, setImage] = useState(Compost4Life);

    const clearState = () => {
        setImage('')
    }

    function handleClick(e) {
        e.preventDefault();
        clearState()
        setImage(e.target.getAttribute('src'));
        console.log(image)
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 5 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className="Achievement">
            <span>Achievement</span>
            <h2>Favorite Project in life</h2>
            <div className="row">
                <div className="achievementBox"> 
                    <img className="projectImg" src={image}/>
                </div>
                <div className="achievementBox">
                    <div className="d-flex">
                        <div>
                            <h3>Compost 4 Life</h3>
                        </div>
                        <div className="metal">
                            <a href="https://edu.sinchew.com.my/node/1096/index.php">
                                <img src={gold} width="60px"/>
                            </a>
                        </div>
                        <div className="metal">
                            <a href="https://www.klesf.net/klesf-international-challenge-2018-results/">
                                <img src={silver} width="53px"/>
                            </a>
                        </div>
                    </div>
                    <h4>
                    Humans waste a lot of food every day, they no make a good way use of food waste to make compost because they are afraid of trouble. However, the Fiery team composed from different highschool students came up with a box-shaped composting machine. This composting machine is very easy to operate and makes composting a very simple task.
                    </h4>
                    <h4>
                    This composting machine is operated with a hand crank. It only needs to be turned two or three times every two days. It is not necessary to open the lid and flip the fertilizer regularly as before. In addition, the composting machine detects the humidity and temperature of the food waste decomposition, so that users can monitor the status of the compost at any time, and there is no need to worry about the smell of the compost, because coffee grounds and tea bags can be used to deodorize.
                    </h4>
                </div>
            </div>
            <div className="carouseFrame">
                <Carousel responsive={responsive} className="carouseBorder">
                    <div onClick={handleClick}>
                        <img src={Compost4Life} id="Compost4Life" width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image3} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image8} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image9} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image10} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image11} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image7} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image5} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image1} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image2} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image4} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image6} width="150px" height="100%"/>
                    </div>
                    <div onClick={handleClick}>
                        <img src={image12} width="150px" height="100%"/>
                    </div>
                </Carousel>;
            </div>
            {/* <div className="viewImage">
                <img src={Compost4Life} width="100%" height="100%"/>
            </div> */}
        </div>
    )   
}

export default Achievement