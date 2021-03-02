import React from "react";
import classes from "./Main.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// material ui---------------------------
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export const MediaCard = ()=> {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

let images = ["logo192.png","logo192.png","logo192.png"]
const LaptopCarousel = ()=>{
    return(<div style={{position:"relative"}}>
      <div>
      <img className={classes.laptop_image} src="images/laptop_image.png" />
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
const LaptopDescription = ()=>{
  return(
  <div>
    <h1 className={classes.main_heading}>
      Where Data Drives Everything
    </h1>
    <p className={classes.main_description}>
      Datalytics is an AI automation and BI integration tool <span className={classes.break}><br/> </span>startup. It aims to provide quality automation of various <span className={classes.break}><br/> </span> day to day analytics task such as visualization, chatbot <span className={classes.break}><br/> </span>assistance, report generation and analytics by making <span className={classes.break}><br/> </span> the process of data analysis more coherent and<span className={classes.break}><br/> </span> collaborative. Completing the repetitive task that can be <span className={classes.break}><br/> </span> automated and diverting time and effort towards more <span className={classes.break}><br/> </span>complex problems.
    </p>
    <div>
      <img src="images/iit_mandi_logo.png" alt={"IIT Mandi Logo"} ></img>
    </div>
  </div>)
}

const Main = (props) => {
  return (
    <React.Fragment>
      <div>Main Content</div>
      {/* section-1 */}
      <section className={classes.section_1}>
        <LaptopDescription></LaptopDescription>
        <LaptopCarousel></LaptopCarousel>
      </section>
    </React.Fragment>
  );
};

export default Main;
