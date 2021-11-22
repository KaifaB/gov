import React from 'react';
import { IconContext } from "react-icons";

import MdKeyboardArrowRight from 'react-icons/md'

const ServicesItem = (props) => {

    return(
        <div>
            <h2>{props.item}</h2>
            <IconContext>
                <MdKeyboardArrowRight value={{ color: "white", height: '65px', width: '65px'}}/>
            </IconContext>
        </div>
    )
}

export default ServicesItem;