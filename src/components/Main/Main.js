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
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  featureCardsImage:{
    width:"60px",
    textAlign:"center"
  },
  featureCardHeading:{
    fontSize:"25px",
    fontWeight:"600",
    textShadow:"0px 4px 15px rgba(0, 0, 0, 0.12)",
    textAlign:"center"
  },
  featureCardDescription:{
    fontSize:"20px",
    fontWeight:"normal",
    textAlign:"center",
    lineHeight:"24px"
    // line-height: 24px;
  },
  featureCard:{
    background: "#FFFFFF",
     boxShadow : "0px 10px 40px rgba(0, 0, 0, 0.1)",
     borderRadius:"10px",
     padding:"10px"
  },
  groupPhotoParent:{
    width:"100%",
    position:"relative"
  },
  bookSessionButton:{
    color:"white",
    fontWeight:"bold",
    '&:hover': {
      backgroundColor: "white",
      color: 'black',
      // outline:"unset",
  },
  textTransform:"unset",
  border:"2px solid white",
  outline:"unset",
  borderRadius:"4px",
  marginRight:"100px",
  fontSize:"18px"
}
});

let featureCardList = [
  {
    heading:["Presentation", "Automation"],
    description:"Provide filtered and custom presentations with inbuild charts and backups. Using multiple sources to get a single output in a single interface.",
    className:"margin-top",
    image:"images/presentation.svg"
},
{
  heading:["Analytical" ,"Services"],
  description:"Having a set of data and don't know how to process it, Datalytics automated analytical process will helpinfiltrationandautomated modeling of data in a given industry.",
  image:"images/analytics.svg",
},
{
  heading:["Chatbot","Assistance"],
  description:"Customized to answer all your questions, it will help you in understanding processes that can be applied as well as provide the right guidance and inference .",
  image:"images/chatbot.svg"
},
{
  heading:["Report","Generation"],
  description:"Need a customized and automated report, the report generator provides automated project reports including all the elements generated and customized through drag and drop.",
  image:"images/reports.svg"
}
]

let images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yellow-maple.jpg/800px-Yellow-maple.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yellow-maple.jpg/800px-Yellow-maple.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yellow-maple.jpg/800px-Yellow-maple.jpg"]
const LaptopCarousel = ()=>{
  let showIndicators = true;
  if(window.innerWidth<660){
      showIndicators=false;
  }
    return(<div style={{position:"relative"}}>
      <div>
      <img className={classes.laptop_image} src="images/laptop_image.png"  />
      </div>
      <div className={classes.laptop_carousel_images_div}>      
            <Carousel showThumbs={false} showArrows={true} autoPlay={true}  swipeable={true} showIndicators={showIndicators} infiniteLoop={true}> 
          {
              images.map((url, index) => (
                  <div key={index}>
                    <img className={classes.laptop_carousel_images} src={url} />
                         
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
      <img src="images/iit_mandi_logo.svg" alt={"IIT Mandi Logo"} className={classes.iit_mandi_logo}></img>
    </div>
  </div>)
}
const FeatureCards = ()=>{
  const classes = useStyles()
  let position ="relative"
  if(window.innerWidth<960){
    position="static";
  }
  return(
    featureCardList.map((val,index)=>
      <Grid item xs={12}  sm={6} md={3} container  spacing={0} style={{position:position,top:index%2==0?"-18vh":"-22vh"}} key={"feature_cards_landing_page"+index}> 
    <Card className={classes.featureCard} >
    <CardContent >
    <Typography align={"center"}>
      <img  src={val.image} className={classes.featureCardsImage} />
      </Typography>
      <Typography className={classes.featureCardHeading}>
        {val.heading[0]}
        <br/>
        {val.heading[1] ||""}
      </Typography>
    
    </CardContent>
    <Typography className={classes.featureCardDescription}>
        {val.description}
      </Typography>

  </Card>
  </Grid>
    )
  )
}

const Main = (props) => {
  let windowWidth = window.innerWidth;
  let justifyItems ="space-around";
  if(windowWidth<960){
    justifyItems="center";
  }
  const materialUiClasses = useStyles()
  
  return (
    <React.Fragment>
      {/* section-1 */}
      <section className={classes.section_1}>
      <Grid container spacing={1}>
        <Grid item xs={12}  sm={12} md={6} container justify={justifyItems}> 
        <LaptopDescription></LaptopDescription>
      
        </Grid>
        <Grid item xs={12}  sm={12} md={6} container justify={justifyItems}> 
        <LaptopCarousel></LaptopCarousel>
      </Grid>
      </Grid>
      </section>


      {/* sectioin-2 */}
      <section>
        <div className={`${classes.section_2_shape}`}>
        <div style={{maxWidth:"100vw", padding:"0px 5vw",}}>
        <Grid container spacing={5} className={classes.section_2_grid}>       
          <FeatureCards></FeatureCards>
        </Grid>

        <Typography className={materialUiClasses.groupPhotoParent}  component={"div"}>
          <img src="images/group_photo.svg"  className={classes.groupPhoto} />    
           <Typography  component={"div"}  className={classes.group_photo_div}> 
          <Typography component={"h2"} className={classes.group_photo_div_heading}>
          Learn! Build! Innovate!
          </Typography>
          <br/>
          <br/>
            <Typography  className={classes.group_photo_div_description}>
            Build with us, your next data-driven endaveour or 
              just make your life easier by hiring our worker machines. 
            </Typography>
            <br/>
            <Typography className={classes.group_photo_div_description}>
            Learn the insights and watch your business grow smartly. 
            Are you a machine learning aspirant or data scientist?

            </Typography>
            <br/>
            <Typography className={classes.group_photo_div_description}>
            We love you already! Join convergence and start sharing your knowledge and wisdom to the rest of the world while you learn without the hassle of too many tools to interact with.
            </Typography>
            <br />
            <br />
            <Typography>
              <Button variant="outlined" className={materialUiClasses.bookSessionButton} >Book A Session</Button>
              <Button variant="outlined" className={materialUiClasses.bookSessionButton}>Try Now</Button>
            </Typography>
       
        </Typography>
        </Typography>
        </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main;
