import React, { Component } from 'react';

import { Carousel } from "react-bootstrap"

import Image1 from '../img/jumbotron_image_1.png'
import Image2 from '../img/jumbotron_image_2.png'
import Image3 from '../img/jumbotron_image_3.png'

import PlantImage1 from '../img/plant_1.jpg'
import PlantImage2 from '../img/plant_2.jpg'
import PlantImage3 from '../img/plant_3.jpg'
import PlantImage4 from '../img/plant_4.jpg'

import GoogleMapComp from '../components/googleMapComponent'
import PlantCard from '../components/plantCard'
import Header from './header'
import '../css/home.css'

class App extends Component {
  

    render() {
      return (
        <div>
            <Header />
            <div className="home-container col-md-12" >
              <Carousel>
                <Carousel.Item>
                  <img src={Image1} className="caro-img" />
                  {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Image2} className="caro-img" />
                  {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Image3} className="caro-img"  />
                  {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
              <div className="after-caro">

                <div className="col-md-3 left-container ">
                  <div className="about-us col-md-12">
                    <h4  > About Us </h4>
                    Leaves nursery – a budding concept in Qatar, is enriched by almost 50 years of interaction of our patrons, at various levels in different capacity in Agriculture-Horticulture industry.
                    {/* We have converted the hobbies and interests of many years into a successful business model. The knowledge and experience has been imbibed since childhood by passionate observation and involvement in traditional farming in family farms, nurtured by innate passion for plant life and love for the environment. */}

                  </div>
                  
                
                  <div className="our-services col-md-12">
                      <div className="service-title col-md-12">
                        <h4 className="coloumn" > Our services </h4>
                        <div className="fa-icon-title coloumn">
                          <i class="fab fa-servicestack"></i>
                        </div>
                      </div>

                      <div className="col-md-12 service-content">
                        Our core services include, but are not limited to the following:
                        <br />
                        <br />
                        <ul>
                          <li> Supply of Plants </li>
                          <li> Landscape Designs </li>
                          <li> Simulated Forests </li>
                          <li> Living Walls </li>
                          <li> Greenhouse Farms </li>
                          <li> Arid Zone Farming</li>
                          <li> Natural Living Backdrops</li>


                        </ul>
                      </div>
                  </div>
                </div>
                <div className="col-md-9 right-container ">
                  <div className="right-title col-md-12">
                    <h4 className="coloumn" >Featured Plants</h4>
                    <div className="fa-icons text-right coloumn">
                      <span className="fa-icon">
                        <i class="fas fa-tint"></i>
                      </span>
                      <span className="fa-icon">
                        <i class="fas fa-sun"></i>
                      </span>
                      <span className="fa-icon">
                        <i class="fas fa-align-right fa-seedling"></i>
                      </span>
                    </div>
                  </div>

                  <div className="plants-container col-md-12">
                    <PlantCard Image={PlantImage1} title={"Citrus Caviar"} />
                    <PlantCard Image={PlantImage2} title={"Olive"}/>
                    <PlantCard Image={PlantImage3} title={"Nyctanthes arbortristis"}/>
                    <PlantCard Image={PlantImage4} title={"Pyrostegia venusta"}/>
                    {/* <PlantCard Image={PlantImage} /> */}
                  </div>

                  <div className="locate-us col-md-12">
                    <div className="col-md-6">
                      <div className="right-title col-md-12">
                        <h4 className="coloumn" >Find Us!</h4>
                        <div className="fa-icons text-right coloumn">
                          <span className="fa-icon">
                            <i class="fas fa-align-right fa-location-arrow"></i>
                          </span>
                        </div>
                      </div>
                      <div className="details col-md-12">
                        Leaves Nursery WLL<br />
                        Al Shagab Street Doha, Qatar<br />
                        business@leavesnursery.com<br />
                        www.leavesnursery.com<br />
                        +974 3328 6691<br />
                      </div>
                    </div>
                  

                  <div className="col-md-6">
                    <GoogleMapComp />
                  </div>
                  </div>  
                  </div>

                </div>

              </div>

            </div>
      
      );
    }
  }
  

  export default App;
  