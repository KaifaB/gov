import React from 'react';


class infoItem extends React.Component {
    constructor(props){
        super(props);
        const image = this.props.image;
    }
    render() {
        return(
            <div className="info-item">
                <img classname="grid-image" src={image} alt="image"/>
                <h1></h1>
                <p></p>
            </div>
        );
    }
  }

  export default infoItem;