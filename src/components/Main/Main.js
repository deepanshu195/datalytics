import React from "react";
import classes from "./Main.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

let images = ["logo192.png","logo192.png","logo192.png"]
const LaptopCarousel = ()=>{
    return(<div style={{position:"relative"}}>
      <div>
      <img className={classes.laptop_image} src="/laptop.png" />
      </div>
      <div className={classes.laptop_carousel_images_div}>      
            <Carousel showThumbs={false} showArrows={true} autoPlay={true}  swipeable={true} showIndicators={true} infiniteLoop={true}> 
          {
              images.map((url, index) => (
                  <div key={index}>
                    <img className={classes.laptop_carousel_images} src={url} />
                          <p>Legend</p>
                  </div>
              ))
          }
        </Carousel>
      </div>
    </div>)
}

const Main = (props) => {
  return (
    <React.Fragment>
      <div>Main Content</div>
      <LaptopCarousel></LaptopCarousel>
    </React.Fragment>
  );
};

export default Main;
