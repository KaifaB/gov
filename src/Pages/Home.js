import React from 'react';
import {Link} from 'react-router-dom'
import { IconContext } from "react-icons";
//import { GiNewShoot } from 'react-icons/gi';
import Title from '../Components/Title'
import InfoItem from '../Components/InfoItem';
//import Data
import { ServicesData } from '../Data/ServicesData';

const newDate = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var day = days[ newDate.getDay() ];
var dayNum = newDate.getDate();
var month = months[ newDate.getMonth() ];

var axios = require("axios").default;

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            news: [],
            newsIsLoaded: false
        }
    }

    componentDidMount = () =>{
        var options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: {q: 'los angeles', lang: 'en'},
            headers: {
                'x-rapidapi-host': 'free-news.p.rapidapi.com',
                'x-rapidapi-key': '9ce58982bcmsh5ec671255175f9fp1e3a1ajsn9c5f7b28d6ed'
            }
        };
        axios.request(options).then((response) => {
                this.setState({
                  news: response.data.articles,
                  newsIsLoaded: true
                });
        }).catch((error) => {
            console.error(error);
        });
    }
    newsGrid() {
        return this.state.news.map((curr, index) =>{
            if (index < 8){
                if (index%2 === 1){
                    return <InfoItem 
                        key={index} 
                        image={curr.media}
                        date={curr.published_date}
                        title={curr.title} 
                        summary={curr.summary} 
                        link={curr.link}
                        topic={curr.topic}
                    />
                }
            }
        })
    }

    render() {
        return(
            <div>
                <div className="welcome">
                    <div className="overlay">
                        <h2>Welcome to</h2>
                        <h1>LOSANGELES.GOV</h1>
                    </div>
                </div>
                <div className="date">
                    <div className="day">{day.toUpperCase() + ", " + month.toUpperCase() + " " + dayNum}</div>
                </div>
                <div className="daily-grid">
                {this.props.GridData.map((curr, index) => {
                    return(
                        <div key={index} className="grid-item">
                            <IconContext.Provider value={{ color: "black", height: '65px', width: '65px'}} >
                            {curr.image}
                            </IconContext.Provider>
                            <h1 className="grid-title">{curr.title}</h1>
                            <p>{curr.info}</p>
                        </div>
                    )
                })}
                </div>
                <div className="guides">
                    <div className="guide-back guide-back-1">
                        <div className="guide guide-1">
                            <h1>Guide:</h1>
                            <h2>WINTER IN LOS ANGELES</h2>
                        </div>
                    </div>
                    <div className="guide-back guide-back-2">
                        <div className="guide guide-2">
                            <h1>Guide:</h1>
                            <h2>PREVENTING FOREST FIRES</h2>
                        </div>
                    </div>
                    <div className="guide-back guide-back-3">
                        <div className="guide guide-3">
                            <h1>Guide:</h1>
                            <h2>UNCOVERING LOS ANGELES'S HISTORY</h2>
                        </div>
                    </div>
                    <div className="guide-back guide-back-4">
                        <div className="guide guide-4">
                            <h1>Guide:</h1>
                            <h2>TRASH AND RECYCLING</h2>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="align-80">
                        <Title title="LATEST NEWS" />
                        <div className="grid">
                            {this.newsGrid()}
                        </div>
                        <Link to="/news"><button className="more-news">MORE CITY NEWS</button></Link>
                    </div>
                </div>
                <div className="services">
                    <div className="align-60 flex">
                        <h1>LA:411 SERVICES REQUESTS</h1>
                        <div className="services-grid">
                            {ServicesData.map((curr) =>{
                                return(
                                    <div className="service-item">
                                        <h2>{curr.item}</h2>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="connected">
                    <div className="align-80">
                        <Title title="STAY CONNECTED" />
                        <div className="flex between">
                            <div className="connected-info">
                                <p>Sign up for email updates from the City of Boston, including information on big events and upcoming traffic and parking restrictions.</p>
                            </div>
                            <div>
                                <div className="flex">
                                    <div className="info-input">
                                        <h3>YOUR EMAIL ADDRESS</h3>
                                        <input type="text" />
                                    </div>
                                    <div className="info-input">
                                        <h3>ZIP CODE</h3>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="flex">
                                    <button>SIGN UP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }

  export default Home;