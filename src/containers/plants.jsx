import React, { Component } from 'react';
import Header from './header';
import PlantCard from '../components/plantCard'
import axios from 'axios'

import '../css/home.css'

class Plants extends Component {
    constructor(props) {
        super(props);
        this.state = { plants: [] }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/getPlants/")
		.then((res) => {
			this.setState({ plants: res.data });
		})
    }

    render() { 
        return ( 
            <div style={{padding:0}}>
                {/* <Header /> */}
                <div className="col-md-12" style={{padding: 0}} >
                    
                    { 
                        this.state.plants.map( (v) => {
                            return( <PlantCard Image={v.image_url} title={v.indian_name} binomial={v.binomial_name} /> )
                        })
                    }
                </div>
            </div>
        )
    }
}
 
export default Plants;