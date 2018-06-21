import React, { Component } from 'react';

import '../css/plantCard.css'


class PlantCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <div className="plantCard-container col-md-3 col-sm-3 col-xs-6" >
                <img src={ this.props.Image } />
                <h4> {this.props.title} </h4>
            </div>
        )
    }
}
 
export default PlantCard;