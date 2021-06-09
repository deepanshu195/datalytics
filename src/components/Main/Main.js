import React, { useState } from "react";
import classes from "./Main.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// material ui---------------------------
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../../App.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

  groupPhotoParent: {
    width: "100%",
    position: "relative",
    bottom: "-5vh",
  },
});

let featureCardList = [
  {
    heading: ["Presentation", "Automation"],
    description:
      "Provide filtered and custom presentations with built-in charts and backups. Using multiple sources to get a single output in a single interface.",
    className: "margin-top",
    image:
      "https://res.cloudinary.com/datalytics/image/upload/v1623226375/Datalytics/presentation_1_tah7um.svg",
  },
  {
    heading: ["Analytical", "Services"],
    description:
      "Having a set of data and don't know how to process it? Datalytics automated analytical processes will help infiltration and automated modeling of data in a given industry.",
    image:
      "https://res.cloudinary.com/datalytics/image/upload/v1623226375/Datalytics/pie-chart_1_setbxf.svg",
  },
  {
    heading: ["Chatbot", "assistance"],
    description:
      "Customized to answer all your questions, it will help you in understanding processes that can be applied as well as provide the right guidance and inference .",
    image:
      "https://res.cloudinary.com/datalytics/image/upload/v1623226375/Datalytics/speak_1_acgwj5.svg",
  },
  {
    heading: ["Report", "Generation"],
    description:
      "Need a customized and automated report, the report generator provides automated project reports including all the elements generated and customized through drag and drop.",
    image:
      "https://res.cloudinary.com/datalytics/image/upload/v1623226375/Datalytics/clipboard_1_wqgpai.svg",
  },
];

let companiesCardList = [
  {
    name: "R Programming",
    description: "Data Analytics",
    img: "https://res.cloudinary.com/datalytics/image/upload/v1622377082/Datalytics/image_19_ozynpx.svg",
    className: "",
  },
  {
    name: "Python",
    description: "Software Development",
    img: "https://res.cloudinary.com/datalytics/image/upload/v1622377081/Datalytics/image_18_l9jmft.svg",
    className: "",
  },
  {
    name: "Keras",
    description: "Artificial Neural Networks",
    img: "https://res.cloudinary.com/datalytics/image/upload/v1622377082/Datalytics/image_23_qusuyo.svg",
    className: "",
  },
  {
    name: "Microsoft ML",
    description: "Cloud Computing",
    img: "https://res.cloudinary.com/datalytics/image/upload/v1622377081/Datalytics/image_24_pktpuq.svg",
    className: "",
  },

  {
    name: "Microsoft Excel",
    description: "Spreadsheet App",
    img: "https://res.cloudinary.com/datalytics/image/upload/v1622377487/Datalytics/image_18_2_sefwwd.svg",
    className: "",
  },
  {
    name: "Slack",
    description: "Business Communication",
    img: "https://res.cloudinary.com/datalytics/image/upload/v1622377082/Datalytics/image_20_twcn6w.svg",
    className: "",
  },
  {
    name: "Docker",
    className: "Data Analytics",
    description: "Virtualization",
    img: "https://res.cloudinary.com/datalytics/image/upload/v1622377082/Datalytics/image_25_o3kjok.svg",
  },
  {
    name: "Microsoft Powerpoint",
    description: "Presentation Program",
    img: "https://res.cloudinary.com/datalytics/image/upload/v1622377084/Datalytics/image_26_euy4wm.svg",
    className: "",
  },
  {
    name: "Observable",
    description: "Thinking with Data",
    img: "https://res.cloudinary.com/datalytics/image/upload/v1622377084/Datalytics/image_27_1_gv4jiy.svg",
    className: "",
  },
];

let images = [
  "https://res.cloudinary.com/datalytics/image/upload/v1615914375/Datalytics/screen_1_t7ka7a.jpg",
  "https://res.cloudinary.com/datalytics/image/upload/v1615914375/Datalytics/screen_2_vjqi0r.jpg",
  "https://res.cloudinary.com/datalytics/image/upload/v1615914541/Datalytics/screen_3_rqrexs.jpg",
];

const LaptopCarousel = () => {
  let showIndicators = true;
  let style = { marginTop: "0px" };
  if (window.innerWidth < 960) {
    style.marginTop = "10vh";
  }
  if (window.innerWidth < 660) {
    showIndicators = false;
    style.marginTop = "2vh";
  }
  return (
    <div style={{ position: "relative", ...style }}>
      <div>
        <img
          className={classes.laptop_image}
          src="https://res.cloudinary.com/datalytics/image/upload/v1615460224/Datalytics/laptop_image_ulcke5.png"
          alt={"laptop"}
        />
      </div>
      <div className={classes.laptop_carousel_images_div}>
        <Carousel
          showThumbs={false}
          showArrows={true}
          autoPlay={false}
          swipeable={true}
          showIndicators={showIndicators}
          infiniteLoop={false}
          showStatus={false}
          stopOnHover={true}
        >
          {images.map((url, index) => (
            <div key={index}>
              <img
                className={classes.laptop_carousel_images}
                src={url}
                alt={"screen"}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const LaptopDescription = () => {
  return (
    <div>
      <h1 className={classes.main_heading}>Where Data Drives Everything!</h1>
      <p className={classes.main_description}>
        Datalytics is an AI automation and BI integration tool startup. It aims
        to provide{" "}
        <span className={classes.break}>
          <br />
        </span>{" "}
        quality automation of various day to day analytics tasks such as
        visualization, chatbot&nbsp;
        <span className={classes.break}>
          <br />
        </span>
        assistance, report generation and analytics by making the process of
        data analysis{" "}
        <span className={classes.break}>
          <br />
        </span>
        more coherent and collaborative. Completing the repetitive task that can
        be
        <span className={classes.break}>
          <br />
        </span>
        be automated and diverting time and effort towards more complex
        problems.
        <div className={classes.backed_by}> Incubated & Backed by</div>
      </p>
      <div className={classes.iit_mandi_logo_div}>
        <img
          src="https://res.cloudinary.com/datalytics/image/upload/v1623220899/Datalytics/image_28_atwfog.svg"
          alt={"IIT Mandi Logo"}
          // style={{
          //   width: "179px",
          //   height: "84px",
          //   marginRight: "40px",
          // }}
          className={classes.iit_mandi_catalyst_logo}
        ></img>
        <img
          src="https://res.cloudinary.com/datalytics/image/upload/v1623221030/Datalytics/Untitled-1_2_e4cmoj.svg"
          alt={"Pad up logo"}
          // style={{ width: "202px", height: "94px", objectFit: "contain" }}
          className={classes.padup_ventures}
        />
      </div>
    </div>
  );
};

const SingleFeatureCard = ({ val }) => {
  const marterialClasses = useStyles();
  let style = {
    heading: {
      fontSize: "22px",
      lineHeight: "27px",
      fontWeight: "600",
      textShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
      // textAlign: "center",
    },
    description: {
      fontSize: "17px",
      fontWeight: "normal",
      lineHeight: "21px",
    },
  };
  if (window.innerWidth < 550) {
    style.heading.fontSize = "18px";
    style.heading.lineHeight = "22px";
    style.description.fontSize = "16px";
    style.description.lineHeight = "22px";
    style.description.textAlign = "start";
  }
  return (
    <Card
      style={{
        background: "unset",
        color: "white",
        boxShadow: "unset",
        border: "1px solid white",
        borderBottomLeftRadius: "35px",
        borderTopRightRadius: "35px",
        padding: "25px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className={`${classes.feature_card_hover}`}
    >
      <CardContent style={{ padding: "unset", paddingBottom: "10px" }}>
        <Typography>
          <img
            src={val.image}
            style={{ width: "60px" }}
            alt={"feature cards"}
          />
        </Typography>
        <Typography
          className={marterialClasses.featureCardHeading}
          style={style.heading}
        >
          {val.heading[0]}
          <br />
          {val.heading[1] || ""}
        </Typography>
      </CardContent>
      <Typography
        className={marterialClasses.featureCardDescription}
        style={style.description}
      >
        {val.description}
      </Typography>
      <Typography align={"right"}>{"See More >"}</Typography>
    </Card>
  );
};

const FeatureCards = () => {
  const marterialClasses = useStyles();
  let position = "relative";
  let useCarousel;
  let width = window.innerWidth;
  if (window.innerWidth < 960) {
    useCarousel = [
      [featureCardList[0], featureCardList[1]],
      [featureCardList[0], featureCardList[1]],
    ];
  }
  if (window.innerWidth < 600) {
    position = "static";
    useCarousel = featureCardList;
  }

  if (useCarousel) {
    return (
      <Carousel
        showThumbs={false}
        showArrows={true}
        autoPlay={true}
        swipeable={true}
        showIndicators={false}
        infiniteLoop={true}
        showStatus={true}
        stopOnHover={true}
        className={`${classes.featureCardListCarousel}`}
      >
        {useCarousel.map((val, index) =>
          Array.isArray(val) ? (
            <Grid container justify={"space-around"}>
              {val.map((arrayValue) => (
                <Grid xs={12} sm={5} md={2} container justify={"center"}>
                  <SingleFeatureCard val={arrayValue}></SingleFeatureCard>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container justify={"center"}>
              <Grid xs={8} sm={5} md={2} container justify={"center"}>
                <SingleFeatureCard val={val}></SingleFeatureCard>
              </Grid>
            </Grid>
          )
        )}
      </Carousel>
    );
  }

  return featureCardList.map((val, index) => (
    <Grid
      container
      justify={"space-between"}
      style={{ position: position, width: "20.5%" }}
      key={"feature_cards_landing_page" + index}
    >
      <SingleFeatureCard val={val}></SingleFeatureCard>
    </Grid>
  ));
};

export const GroupPhoto = () => {
  const materialUiClasses = useStyles();

  return (
    <Typography
      className={materialUiClasses.groupPhotoParent}
      component={"div"}
    >
      <img
        src="https://res.cloudinary.com/datalytics/image/upload/v1615459423/Datalytics/group_photo_psnwqj.svg"
        className={classes.groupPhoto}
        alt={"group "}
      />
      <Typography component={"div"} className={classes.group_photo_div}>
        <Typography
          component={"h2"}
          className={classes.group_photo_div_heading}
        >
          Learn! Build! Innovate!
        </Typography>
        <br />
        <br />
        <Typography className={classes.group_photo_div_description}>
          Build with us, your next data-driven endaveour or just make your life
          easier by hiring our worker machines.
        </Typography>
        <br />
        <Typography className={classes.group_photo_div_description}>
          Learn the insights and watch your business grow smartly. Are you a
          machine learning aspirant or data scientist?
        </Typography>
        <br />
        <Typography className={classes.group_photo_div_description}>
          We love you already! Join convergence and start sharing your knowledge
          and wisdom to the rest of the world while you learn without the hassle
          of too many tools to interact with.
        </Typography>
        <br />
        <br />
        <Typography>
          <Button variant="outlined" className={classes.bookSessionButton}>
            Book A Session
          </Button>
          <Button variant="outlined" className={classes.bookSessionButton}>
            Try Now
          </Button>
        </Typography>
      </Typography>
    </Typography>
  );
};

const SingleCompanyCard = ({ data, style }) => {
  let compStyle = {
    heading: {
      fontSize: "20px",
      lineHeight: "23px",
      letterSpacing: "0.05em",
      textAlign: "initial",
    },
    description: {
      fontSize: "14px",
      lineHeight: "16px",
      marginTop: "16px",
      textAlign: "start",
    },
    image: {
      width: "100px",
      height: "100px",
    },
  };
  if (window.innerWidth < 500) {
    compStyle.image.width = "75px";
    compStyle.image.height = "75px";
  }

  return (
    <Card style={style}>
      <CardContent style={{ display: "flex" }}>
        <Typography style={{ marginRight: "30px", display: "flex" }}>
          <img src={data.img} style={compStyle.image} />
        </Typography>
        <Typography
          style={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography style={compStyle.heading}>{data.name}</Typography>
          <Typography style={compStyle.description}>
            {data.description}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

const MakeCompaniesColumn = ({ columnData, xs, md, sm, style }) => {
  return (
    <Grid md={md} sm={sm} xs={xs} style={style}>
      {columnData.map((data) => (
        <SingleCompanyCard
          data={data}
          style={{ outline: "none", boxShadow: "none" }}
        />
      ))}
    </Grid>
  );
};

export const CompaniesCard = () => {
  let viewObject = [
    [companiesCardList[0], companiesCardList[1], companiesCardList[2]],
    [companiesCardList[3], companiesCardList[4], companiesCardList[5]],
    [companiesCardList[6], companiesCardList[7], companiesCardList[8]],
  ];

  let useCarousel;
  let width = window.innerWidth;
  if (window.innerWidth < 960) {
    useCarousel = true;
  }

  if (useCarousel) {
    return (
      <Carousel
        showThumbs={false}
        showArrows={true}
        autoPlay={false}
        swipeable={true}
        showIndicators={false}
        infiniteLoop={true}
        showStatus={true}
        stopOnHover={true}
        className={`${classes.featureCardListCarousel}`}
      >
        {viewObject.map((val) => (
          <MakeCompaniesColumn
            sm={6}
            xs={10}
            columnData={val}
            style={{ margin: "auto" }}
          />
        ))}
      </Carousel>
    );
  }

  return (
    <Grid
      container
      justify={"center"}
      style={{ marginLeft: "12%", marginRight: "8%", width: "80%" }}
    >
      {viewObject.map((val) => (
        <MakeCompaniesColumn columnData={val} xs={12} sm={6} md={4} />
      ))}
    </Grid>
  );
};

const FourDImage = () => {
  let style = {
    marginBottom: "unset",
    marginTop: "70px",
  };

  if (window.innerWidth < 600) {
    style.marginBottom = "unset";
  }
  let src =
    "https://res.cloudinary.com/datalytics/image/upload/v1623223613/Datalytics/Section_4_1800x900_jalziz.png";
  let width = "100%";
  if (window.innerWidth < 600) {
    src =
      "https://res.cloudinary.com/datalytics/image/upload/v1622383970/Datalytics/4d_sec_mobile_bnc8le.svg";
    width = "-webkit-fill-available";
    style.marginTop = "54px";
  }
  return (
    <Typography
      style={{ marginTop: style.marginTop, marginBottom: style.marginBottom }}
    >
      <img src={src} style={{ width: width }}></img>
    </Typography>
  );
};

export const WorkInProgress = () => {
  let justify = "";
  if (window.innerWidth < 960) {
    justify = "center";
  }
  return (
    <>
      <Typography
        component={"div"}
        align={"center"}
        className={classes.work_in_progress_heading}
      >
        Work In Progress
      </Typography>
      <Typography
        component={"div"}
        align={"center"}
        className={classes.work_in_progress_sub_heading}
      >
        Awesome Products coming soon
      </Typography>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          style={{ marginTop: "60px" }}
          sm={4}
          md={4}
          container
          spacing={0}
          alignContent={"center"}
          justify={justify || "flex-end"}
        >
          <Typography align={"center"} component={"div"}>
            <img
              src={
                "https://res.cloudinary.com/datalytics/image/upload/v1615482468/Datalytics/intelligent_analysis_amkifz.svg"
              }
              className={classes.work_in_progress_pics}
              alt={"intelligent analysis"}
            ></img>

            <Typography
              align={"center"}
              className={classes.connect_with_us_pic_desc}
            >
              Intelligent analysis
            </Typography>
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          style={{ marginTop: "60px" }}
          sm={4}
          md={4}
          container
          spacing={0}
          alignContent={"center"}
          justify={justify || "center"}
        >
          <Card style={{ boxShadow: "unset" }}>
            <Typography align={"center"}>
              <img
                src={
                  "https://res.cloudinary.com/datalytics/image/upload/v1615482488/Datalytics/explore_hirwxb.svg"
                }
                className={classes.work_in_progress_pics}
                alt={"Explore"}
              ></img>
            </Typography>
            <Typography
              component={"h2"}
              align={"center"}
              className={classes.connect_with_us_pic_desc}
            >
              Explore
            </Typography>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          style={{ marginTop: "60px" }}
          sm={4}
          md={4}
          container
          spacing={0}
          alignContent={"center"}
          justify={justify || "flex-start"}
        >
          <Card style={{ boxShadow: "unset" }}>
            <Typography align={"center"}>
              <img
                src={
                  "https://res.cloudinary.com/datalytics/image/upload/v1615482468/Datalytics/custom_profiling_zggov0.svg"
                }
                className={classes.work_in_progress_pics}
                alt={"Custom Profiling"}
              ></img>
            </Typography>
            <Typography
              component={"h2"}
              align={"center"}
              className={classes.connect_with_us_pic_desc}
            >
              Custom Profiling
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
const ConnectWithUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  let marginTop = "80px";
  if (window.innerWidth < 600) {
    marginTop = "10px";
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: marginTop,
      }}
    >
      <div className={classes.connect_with_us}>
        <div className={classes.connect_with_us_div}>
          <Typography align={"center"} className={classes.connect_with_us_text}>
            Connect With Us
          </Typography>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Grid container justify={"space-between"}>
              <Grid sm={5} xs={12} md={5}>
                <TextField
                  id="outlined-basic"
                  autoComplete={"on"}
                  variant={"outlined"}
                  required={true}
                  className={classes.connect_with_us_form_input}
                  onChange={(e) => setName(e.target.value)}
                  label={"Full Name"}
                  fullWidth={true}
                  InputLabelProps={{
                    style: { margin: "5px" },
                  }}
                />
              </Grid>
              <Grid sm={5} xs={12} md={5}>
                <TextField
                  id="outlined-basic-2"
                  types={"email"}
                  label={"E-mail"}
                  variant={"outlined"}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{
                    style: { margin: "5px" },
                  }}
                  fullWidth={true}
                  className={classes.connect_with_us_form_input}
                  autoComplete={"on"}
                  required={true}
                />
              </Grid>
            </Grid>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant={"outlined"}
              className={classes.connect_with_us_form_input}
              autoComplete={"on"}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth={true}
              InputLabelProps={{
                style: { margin: "5px" },
              }}
              label={" Any message for us "}
            />
            <Typography
              align={"center"}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              component={"div"}
            >
              <Button
                variant="outlined"
                className={classes.bookSessionButton}
                style={{ margin: "unset", marginRight: "0px" }}
              >
                Submit
              </Button>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};
const StartUpIndia = () => {
  if (window.innerWidth > 550) {
    return (
      <>
        <Typography
          align={"center"}
          className={classes.reconginzed_by}
          component={"div"}
        >
          Recongnized by
        </Typography>
        <Typography align={"center"} component={"div"}>
          <img
            src="https://res.cloudinary.com/datalytics/image/upload/v1622385926/Datalytics/logo_2_xldl0e.svg"
            style={{
              objectFit: "scale-down",
              marginTop: "50px",
              width: "400px",
              height: "104px",
            }}
          ></img>
        </Typography>
      </>
    );
  }
  const Cohort = () => {
    return (
      <div className={classes.tilted}>
        <Typography align={"center"} className={classes.cohort_heading}>
          Cohorts
        </Typography>
        <Typography align={"center"} className={classes.cohort_description}>
          The minds behind
        </Typography>
        <Grid
          container
          spacing={1}
          style={{ maxWidth: "100vw", margin: "unset" }}
        >
          <Grid item xs={12} sm={12} md={6} container justify={"center"}>
            <Card className={classes.cohort_card}>
              <img
                src={
                  "http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg"
                }
                alt={"elon"}
                className={classes.cohort_image}
              ></img>
              <Typography align={"center"} className={classes.cohort_founder}>
                VIDHAN
              </Typography>
              <Typography
                align={"center"}
                className={classes.cohort_founder_portfolio}
              >
                Portfolio
              </Typography>
              <Typography align={"center"} style={{ marginTop: "20px" }}>
                <a href={"/"} className={classes.social_links}>
                  <LinkedInIcon style={{ width: "40px", height: "40px" }} />
                </a>
                <a href={"/"} className={classes.social_links}>
                  <FacebookIcon style={{ width: "40px", height: "40px" }} />
                </a>
                <a href={"/"} className={classes.social_links}>
                  <InstagramIcon style={{ width: "40px", height: "40px" }} />
                </a>
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} container justify={"center"}>
            <Card className={classes.cohort_card}>
              <img
                src={
                  "http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg"
                }
                alt={"elon"}
                className={classes.cohort_image}
              ></img>
              <Typography align={"center"} className={classes.cohort_founder}>
                VIDHAN
              </Typography>
              <Typography
                align={"center"}
                className={classes.cohort_founder_portfolio}
              >
                Portfolio
              </Typography>
              <Typography align={"center"} style={{ marginTop: "20px" }}>
                <a href={"/"} className={classes.social_links}>
                  <LinkedInIcon style={{ width: "40px", height: "40px" }} />
                </a>
                <a href={"/"} className={classes.social_links}>
                  <FacebookIcon style={{ width: "40px", height: "40px" }} />
                </a>
                <a href={"/"} className={classes.social_links}>
                  <InstagramIcon style={{ width: "40px", height: "40px" }} />
                </a>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  };
  return "";
};

const Main = () => {
  let windowWidth = window.innerWidth;
  let justifyItems = "space-around";
  if (windowWidth < 960) {
    justifyItems = "center";
  }

  return (
    <React.Fragment>
      {/* section-1 */}
      <section className={classes.section_1}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} container justify={justifyItems}>
            <LaptopCarousel></LaptopCarousel>
          </Grid>
          <Grid item xs={12} sm={12} md={12} container justify={justifyItems}>
            <LaptopDescription></LaptopDescription>
          </Grid>
        </Grid>
      </section>
      {/* ------------------------------------------------------------------------------ */}

      {/* section-2 */}
      <section className={classes.section_2}>
        <div className={`${classes.section_2_shape}`}>
          <div>
            <Typography
              align={"center"}
              className={classes.section_2_heading}
              style={{ color: "white" }}
              component={"div"}
            >
              SOLUTION WE PROVIDE
            </Typography>
            <Grid
              container
              className={classes.section_2_grid}
              justify={"space-around"}
            >
              <FeatureCards />
            </Grid>
            {/* <GroupPhoto /> */}
          </div>
          <div className={classes.tilted_box}></div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------ */}
      {/* section -3 */}
      <section className={classes.section_3}>
        <Typography
          align={"center"}
          className={classes.companies_pics_title}
          component={"div"}
        >
          Seamless Integration across Platforms
        </Typography>

        <Typography
          align={"center"}
          className={classes.companies_pics_description}
          component={"div"}
        >
          Readily available success stories and blueprints that can kickstart
          your automation journey immediately
        </Typography>
      </section>
      {/*  ----------------------------------------------------------------------- */}
      {/* section 4 */}
      <CompaniesCard />

      {/*  ----------------------------------------------------------------------- */}

      {/* section 5 */}
      <FourDImage></FourDImage>

      {/*  ----------------------------------------------------------------------- */}
      {/*  section 6 */}
      <section className={classes.section_5}>
        <ConnectWithUs />
        <StartUpIndia />
      </section>
    </React.Fragment>
  );
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
