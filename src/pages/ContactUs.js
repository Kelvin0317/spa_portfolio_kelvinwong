import GoogleMapReact from 'google-map-react';
import MapPin from '../components/mapPin.png'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
    const defaultProps = {
        center: {
          lat: 5.333363231971518,
          lng: 100.48829121262949
        },
        zoom: 11
      };

    return (
        <div className="contactUs">
            <div className="row">
                <div className="contactBox padding">
                    <h1>My Contacts</h1>
                    <p>As ever, if you have any questions or comments please feel free to share them in the comments beside, remember to fill personal details.
                    Your Service Request Form will be reviewed shortly and a response made to the email address or phone number given</p>
                    <h2>Address</h2>
                    <span>No47, Lorong Sejahtera 13 Taman Sejahtera 14000 Pulau pinang</span>
                    <h2>Phone</h2>
                    <span>012-577 1534</span>
                    <span>017 424 4518</span>
                    <h2>Email</h2>
                    <span>kelvin-.-wong@outlook.com</span>
                </div>
                <div className="contactBox form">
                    <h1>Quick Contact Form</h1>
                    <div className="row">
                        <input type="text" name="name" id="name" class="form-control" placeholder="Your Name"/>
                        <input type="text" name="email" id="email" class="form-control" placeholder="Your Email"/>
                    </div>
                    <div className="row">
                        <input type="number" name="number" id="number" class="form-control" placeholder="Your Phone"/>
                        <input type="text" name="address" id="address" class="form-control" placeholder="Address"/>
                    </div>
                    <div className="row">
                        <input type="text" name="message" id="message" class="form-control message" placeholder="Your Message...."/>
                    </div>
                    <div className='row'>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="map" style={{ height: '60vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                    lat={5.333363231971518}
                    lng={100.48829121262949}
                    text={<img src={MapPin} width="40px"/>}
                    />
                </GoogleMapReact>
                </div>
            </div>
        </div>
    )   
}
