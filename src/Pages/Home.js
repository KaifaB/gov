import React from 'react';
import { IconContext } from "react-icons";

const newDate = new Date();
let options = {
    weekday: "long",
    month: "long",
    day: "numeric"
}

Intl.DateTimeFormat("en-US", options).format(newDate)

class Home extends React.Component {
    constructor(props){
        super(props);
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
                    <div></div>
                    <div className="day">{newDate.toString("YYYY-mm-dd")}</div>
                    <div></div>
                </div>
                <div className="daily-grid">
                {this.props.GridData.map((curr, index) => {
                    return(
                        <div className="grid-item">
                            <IconContext.Provider value={{ color: "black", height: '65px', width: '65px'}} >
                            {curr.image}
                            </IconContext.Provider>
                            <h1 className="grid-title">{curr.title}</h1>
                            <p>{curr.info}</p>
                        </div>
                    )
                })}
                </div>
                <div className="resources">

                </div>
                <div className="guides">
                    <span className="guide-back">
                        <div className="guide">
                            <h1>Guide:</h1>
                            <h2>WINTER IN LOS ANGELES</h2>
                        </div>
                    </span>
                    <span className="guide-back">
                        <div className="guide">
                            <h1>Guide:</h1>
                            <h2>PREVENTING FOREST FIRES</h2>
                        </div>
                    </span>
                    <span className="guide-back">
                        <div className="guide">
                            <h1>Guide:</h1>
                            <h2>UNCOVERING LOS ANGELES'S HISTORY</h2>
                        </div>
                    </span>
                    <span className="guide-back">
                        <div className="guide">
                            <h1>Guide:</h1>
                            <h2>TRASH AND RECYCLING</h2>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
  }

  export default Home;