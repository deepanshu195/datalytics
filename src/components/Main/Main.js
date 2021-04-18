import React, { useState } from "react";
import classes from "./Main.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// material ui---------------------------
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

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
    fontSize:"19px",
    lineHeight:"23px",
    fontWeight:"600",
    textShadow:"0px 4px 15px rgba(0, 0, 0, 0.12)",
    textAlign:"center"
  },
  featureCardDescription:{
    fontSize:"15px",
    fontWeight:"normal",
    textAlign:"center",
    lineHeight:"18px"
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
    position:"relative",
    bottom:"-5vh"
  },
});

let featureCardList = [
    {
      heading:["Presentation", "Automation"],
      description:"Provide filtered and custom presentations with inbuild charts and backups. Using multiple sources to get a single output in a single interface.",
      className:"margin-top",
      image:"https://res.cloudinary.com/datalytics/image/upload/v1615459423/Datalytics/presentation_ykgyft.svg",
      top:"-18vh",
      medium:"-18vh"
  },
  {
    heading:["Analytical" ,"Services"],
    description:"Having a set of data and don't know how to process it, Datalytics automated analytical process will help infiltration and automated modeling of data in a given industry.",
    image:"https://res.cloudinary.com/datalytics/image/upload/v1615459421/Datalytics/analytics_bjjclk.svg",
    top:"-24vh",
    medium:"-24vh"
  },
  {
    heading:["Chatbot","Assistance"],
    description:"Customized to answer all your questions, it will help you in understanding processes that can be applied as well as provide the right guidance and inference .",
    image:"https://res.cloudinary.com/datalytics/image/upload/v1615459421/Datalytics/chatbot_qrvtad.svg",
    top:"-20vh",
    medium:"-18vh"
  },
  {
    heading:["Report","Generation"],
    description:"Need a customized and automated report, the report generator provides automated project reports including all the elements generated and customized through drag and drop.",
    image:"https://res.cloudinary.com/datalytics/image/upload/v1615459423/Datalytics/reports_wqkmlh.svg",
    top:"-28vh",
    medium:"-24vh"
  }
]

let images = ["https://res.cloudinary.com/datalytics/image/upload/v1615914375/Datalytics/screen_1_t7ka7a.jpg","https://res.cloudinary.com/datalytics/image/upload/v1615914375/Datalytics/screen_2_vjqi0r.jpg","https://res.cloudinary.com/datalytics/image/upload/v1615914541/Datalytics/screen_3_rqrexs.jpg"]

const LaptopCarousel = ()=>{
  let showIndicators = true;
  let style = {marginTop:"0px"};
  if(window.innerWidth < 960){
    style.marginTop = "10vh"
  }
  if(window.innerWidth<660){
      showIndicators=false;
  }
    return(<div style={{position:"relative",...style}}>
      <div>
      <img className={classes.laptop_image} src="https://res.cloudinary.com/datalytics/image/upload/v1615460224/Datalytics/laptop_image_ulcke5.png"  alt={"laptop"}/>
      </div>
      <div className={classes.laptop_carousel_images_div}>      
            <Carousel showThumbs={false} showArrows={true} autoPlay={true}  swipeable={true} showIndicators={showIndicators} infiniteLoop={true}  showStatus={false} stopOnHover={true}> 
          {
              images.map((url, index) => (
                  <div key={index}>
                    <img className={classes.laptop_carousel_images} src={url}  alt={"screen"}/>
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
      Datalytics is an AI automation and BI integration tool <span className={classes.break}><br/> </span>startup. It aims to provide quality automation of various <span className={classes.break}><br/> </span> day to day analytics task such as visualization, chatbot <span className={classes.break}><br/> </span>assistance, report generation and analytics by making <span className={classes.break}><br/> </span> the process of data analysis more coherent and<span className={classes.break}><br/> </span> collaborative. Completing the repetitive task that can be <span className={classes.break}><br/> </span> automated and diverting time and effort towards more <span className={classes.break}><br/> </span>complex problems. <br/> <br/> <h2> Incubated & Backed by</h2>
    </p>
    <div className={classes.iit_mandi_logo_div}>
      <img src="https://res.cloudinary.com/datalytics/image/upload/v1615459421/Datalytics/iit_mandi_logo_vgdde5.svg" alt={"IIT Mandi Logo"}  style={{width:"200px",marginRight:"40px"}}></img>
      <img src="https://res.cloudinary.com/datalytics/image/upload/v1616042075/Datalytics/PadUp_fqlzid.png" alt={"Pad up logo"} style={{height:"50px",width:"150px",objectFit:
    "contain"}} />
    </div>
  </div>
  )
}
const FeatureCards = ()=>{
  const classes = useStyles()
  let position ="relative"
  let width = window.innerWidth; 
  if(window.innerWidth < 600 ) {
    position="static";
  }
  return(
    featureCardList.map((val,index)=>
      <Grid item xs={12}  sm={6} md={3} container  spacing={0} style={{position:position,top:(width > 960 ?  val.top : val.medium ) }} key={"feature_cards_landing_page"+index}> 
    <Card className={classes.featureCard} style={{background:"#eff8fc"}} >
    <CardContent  >
      <Typography align={"center"}>
        <img src={val.image} className={classes.featureCardsImage}   alt={"feature cards"}/>
      </Typography>
      <Typography className={classes.featureCardHeading} >
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
const subscribe=()=>{

}
export const GroupPhoto = ()=>{
  const materialUiClasses = useStyles()

  return(
  <Typography className={materialUiClasses.groupPhotoParent}  component={"div"}>
    <img src="https://res.cloudinary.com/datalytics/image/upload/v1615459423/Datalytics/group_photo_psnwqj.svg"  className={classes.groupPhoto} alt={"group "}/>    
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
      <Button variant="outlined" className={classes.bookSessionButton} >Book A Session</Button>
      <Button variant="outlined" className={classes.bookSessionButton}>Try Now</Button>
    </Typography>
</Typography>
</Typography>
  )
}
export const WorkInProgress  =()=>{
  let justify = "";
  if(window.innerWidth < 960){
      justify="center"
  }
  return(
    <>
    <Typography component={"div"} align={"center"} className={classes.work_in_progress_heading}>
      Work In Progress
    </Typography>
    <Typography component={"div"} align={"center"} className={classes.work_in_progress_sub_heading}>
      Awesome Products coming soon
    </Typography>
    <Grid container spacing={0} >       
        <Grid item xs={12} style={{marginTop:"60px"}} sm={4}  md={4} container  spacing={0} alignContent={"center"} justify={justify|| "flex-end"}> 
        <Typography  align={"center"} component={"div"}>
        
          <img src={"https://res.cloudinary.com/datalytics/image/upload/v1615482468/Datalytics/intelligent_analysis_amkifz.svg"} className={classes.work_in_progress_pics} alt={"intelligent analysis"}></img>
        
          <Typography  align={"center"} className={classes.connect_with_us_pic_desc}>
            Intelligent analysis
       </Typography>
       </Typography>

        </Grid>

        <Grid item xs={12} style={{marginTop:"60px"}} sm={4}  md={4} container  spacing={0} alignContent={"center"} justify={justify||"center"}>
          <Card style={{boxShadow:"unset"}} >
            <Typography align={"center"}>
            <img src={"https://res.cloudinary.com/datalytics/image/upload/v1615482488/Datalytics/explore_hirwxb.svg"} className={classes.work_in_progress_pics} alt={"Explore"}></img>
          </Typography>
          <Typography component={"h2"} align={"center"} className={classes.connect_with_us_pic_desc}>
            Explore
          </Typography>
        </Card>
        </Grid>
      

        <Grid item xs={12} style={{marginTop:"60px"}} sm={4}  md={4} container  spacing={0} alignContent={"center"} justify={justify||"flex-start"}> 
        <Card style={{boxShadow:"unset"}} >
          <Typography align={"center"}>
               <img src={"https://res.cloudinary.com/datalytics/image/upload/v1615482468/Datalytics/custom_profiling_zggov0.svg"} className={classes.work_in_progress_pics} alt={"Custom Profiling"}></img>
          </Typography>
          <Typography component={"h2"} align={"center"} className={classes.connect_with_us_pic_desc}>
            Custom Profiling
          </Typography>
        </Card>
        </Grid>
      
      </Grid>
  </>
  )
}
const ConnectWithUs = ()=>{
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();



  return(
    <div style={{display:"flex", justifyContent:"center",marginTop:"10vh"}}>
    <div className={classes.connect_with_us}>
    <div className={classes.connect_with_us_div}>
    <Typography  align={"center"} className={classes.connect_with_us_text}>
      Connect With Us
    </Typography>
    <Typography  align={"center"} component={"div"}>
    
    <div className={classes.connect_with_us_underline}>
      </div>
    </Typography>
    <Typography  align={"center"} className={classes.stay_in_touch} component={"div"}>
      Let’s stay in touch through our newsletter!
    </Typography>
    
    <form onSubmit={(e)=>{e.preventDefault();subscribe({name,email,message})}}>
    {/* full name */}
    <Typography   className={` ${classes.connect_with_us_form}`} component={"div"}>
      <span className={`${classes.required_field}`}>
        Full Name
      </span>
    </Typography>  
     <TextField id="outlined-basic"   autoComplete={"on"} fullWidth={true} required 
     className={classes.connect_with_us_form_input} 
     onChange={(e)=>setName(e.target.value)}
     placeholder={"Name"}
     InputLabelProps={{
      style: { margin:"5px", },
    }}
     />

  {/* email */}
      <Typography   className={` ${classes.connect_with_us_form}`} component={"div"}>
      <span className={`${classes.required_field}`}>      
          Email
      </span>
      </Typography>  
      <TextField id="outlined-basic-2"  
      types={"email"}
      placeholder={"E-mail"}
    
         onChange={(e)=>setEmail(e.target.value)} InputLabelProps={{
          style: { margin:"5px", },
        }}
      className={classes.connect_with_us_form_input} autoComplete={"on"} fullWidth={true} required/>

{/* message */}
      <Typography   className={` ${classes.connect_with_us_form}`} component={"div"}>
      <span >
        Any message for us ?
     </span>
     </Typography>  
     <TextField
          id="outlined-multiline-static"
          
          multiline
          rows={4}
          className={classes.connect_with_us_form_input}
          autoComplete={"on"} 
          onChange={(e)=>setMessage(e.target.value)}
          fullWidth={true}
          InputLabelProps={{
            style: { margin:"5px", },
          }}
          placeholder={"Message"}
    
      />
            <Typography align={"center"} style={{marginTop:"20px"}}>
              <Button variant="outlined" className={classes.bookSessionButton} style={{margin:"unset"}}>SUBSCRIBE</Button>
            </Typography>  
      </form>
    </div>
  </div>
  </div>
  )
}
const Cohort = ()=>{
  return(<div className={classes.tilted}>
    <Typography align={"center"} className={classes.cohort_heading}>
    Cohorts
    </Typography>
    <Typography align={"center"} className={classes.cohort_description}>
    The minds behind
    </Typography>
    <Grid container spacing={1} style={{maxWidth:"100vw",margin:"unset"}}>
        <Grid item xs={12}  sm={12} md={6} container justify={"center"}> 
        <Card   className={classes.cohort_card}>
            <img src={"http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg"} alt={"elon"} className={classes.cohort_image}></img>
            <Typography align={"center"} className={classes.cohort_founder}>
                VIDHAN
            </Typography>
            <Typography align={"center"} className={classes.cohort_founder_portfolio}>
                Portfolio
            </Typography>
            <Typography align={"center"} style={{marginTop:"20px"}}>
              <a href={"/"} className={classes.social_links}><LinkedInIcon style={{width:"40px",height:"40px"}}/></a>
              <a href={"/"} className={classes.social_links}><FacebookIcon style={{width:"40px",height:"40px"}}/></a>
              <a href={"/"} className={classes.social_links}><InstagramIcon style={{width:"40px",height:"40px"}}/></a>
            </Typography >

        </Card>
        </Grid>
        <Grid item xs={12}  sm={12} md={6} container justify={"center"}> 
        <Card   className={classes.cohort_card}>
            <img src={"http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg"} alt={"elon"} className={classes.cohort_image}></img>
            <Typography align={"center"} className={classes.cohort_founder}>
                VIDHAN
            </Typography>
            <Typography align={"center"} className={classes.cohort_founder_portfolio}>
                Portfolio
            </Typography>
            <Typography align={"center"} style={{marginTop:"20px"}}>
              <a href={"/"} className={classes.social_links}><LinkedInIcon style={{width:"40px",height:"40px"}}/></a>
              <a href={"/"} className={classes.social_links}><FacebookIcon style={{width:"40px",height:"40px"}}/></a>
              <a href={"/"} className={classes.social_links}><InstagramIcon style={{width:"40px",height:"40px"}}/></a>
            </Typography >

        </Card>
        </Grid>
      </Grid>
  </div>)
}

const Main = () => {
  let windowWidth = window.innerWidth;
  let justifyItems ="space-around";
  if(windowWidth<960){
    justifyItems="center";
  }


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
{/* ------------------------------------------------------------------------------ */}


      {/* sectioin-2 */}
      <section className={classes.section_2}>
        <div className={`${classes.section_2_shape}`}>
        <div style={{maxWidth:"100vw", padding:"0px 5vw",}}>
        <Grid container spacing={5} className={classes.section_2_grid}>       
          <FeatureCards />
        </Grid>
          {/* <GroupPhoto /> */}
        </div>
        </div>

      </section>

    {/* ------------------------------------------------------------------------------ */}
      {/* section -3 */}
      <section className={classes.section_3}>
      <Typography align={"center"} className={classes.companies_pics_title} component={"div"}>
      Seamless Integration across Platforms
     </Typography>
        <img src={"https://res.cloudinary.com/datalytics/image/upload/v1615457959/Datalytics/Integration_Graphic_1_n6zyzw.svg"} className={classes.companies_pics} alt={"companies"} />
        <Typography align={"center"} className={classes.companies_pics_description} component={"div"}>
          We understand that it's difficult to adjust in a new development environment. This is why we've built our services around the tools you already have exposure to
        </Typography>
      </section>
    {/*  ----------------------------------------------------------------------- */}

    {/* section 4 */}
    {/* <Cohort /> */}

    {/*  ----------------------------------------------------------------------- */}

    {/*  section 5 */}
   <section className={classes.section_3} style={{padding:"10px",minHeight:"0px"}}>
     <img src={"https://res.cloudinary.com/datalytics/image/upload/v1615470968/Datalytics/data_source_huklyt.svg"} alt={"data source extension"} className={classes.companies_pics} />
   </section>
      {/*  ----------------------------------------------------------------------- */}
      {/*  section 6 */}
    <section className={classes.section_5}>
      <WorkInProgress />
      <ConnectWithUs />
    </section>
    </React.Fragment>
  );
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);

