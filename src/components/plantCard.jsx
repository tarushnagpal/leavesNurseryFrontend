import React, { Component } from 'react';

import '../css/plantCard.css'


class PlantCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        console.log(this.props)
        if(this.props.featured) 
            return ( 
                <div className="col-md-4" >
                    <div className="plantCard-container">
                        <img src={ this.props.Image } />
                        <center> <h4> {this.props.title} </h4> </center>
                        <center> <h5> {this.props.binomial} </h5> </center>
                    </div>
                </div>
            )
        else
            return ( 
                <div className="col-md-3" >
                    <div className="plantCard-container">
                        <img src={ this.props.Image } />
                        <center> <h4> {this.props.title} </h4> </center>
                        <center> <h5> {this.props.binomial} </h5> </center>
                    </div>
                </div>
            )
    }
}
 
export default PlantCard;