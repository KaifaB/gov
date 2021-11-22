import React from 'react';


class InfoItem extends React.Component {
    render() {
        var timestamp = Date.parse(this.props.date)
        var date = new Date(timestamp)
        const realday = date.toString().slice(4,10)
        return(
            <a href={this.props.link}>
                <div className="info-item">
                    <img classname="grid-image" src={this.props.image} alt={"article"+this.props.key}/>
                    <div>
                        <h1>{this.props.title.slice(0,60)}...</h1>
                        <p>{this.props.topic}</p>
                        <h3>{realday}</h3>
                    </div>
                </div>
            </a>
        );
    }
  }

  export default InfoItem;