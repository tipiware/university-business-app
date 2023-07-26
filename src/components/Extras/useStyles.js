import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  firstContact: {
    padding: "130px 0",
    height: "100%",
    textAlign: "center",
    backgroundImage:
      "url('https://i.imgur.com/Hhp3ffs.jpg')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "right",
    },
  },

  firstAbout: {
    padding: "110px 0",
    height: "100%",
    textAlign: "center",
    backgroundImage:
      "url('https://i.imgur.com/kxGPqEz.jpg')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "right",
    },
  },

  firstInspo: {
    padding: "110px 0",
    height: "100%",
    textAlign: "center",
    backgroundImage:
      "url('https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspiration.jpg?raw=true')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "right",
    },
  },

  titleContact: {
    fontSize: 80,
    fontWeight: 600,
    margin: 0,
    fontFamily: "'Playfair Display', serif",
    color: "white",
  },

  titleAbout: {
    fontSize: 70,
    fontWeight: 600,
    margin: 0,
    fontFamily: "'Playfair Display', serif",
    color: "black",
  },

  subtitleAbout: {
    fontSize: 35,
    color: "black",
    fontStyle: "italic",
    letterSpacing: 0.5,
    display: "block",
    fontWeight: 600,
  },

  subtitleInspo: {
    fontSize: 40,
    color: "white",
    fontStyle: "italic",
    letterSpacing: 0.5,
    display: "block",
    fontWeight: "bold",
  },

  second: {
    display: "flex",
    justifyContent: " space-around",
    margin: "80px 0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  text: {
    width: "38%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      marginBottom: 20,
    },
  },

  flowers: {
    color: "olivedrab",
  },

  secondTitle: {
    fontSize: "2.3em",
    justifyContent: "center",
    lineHeight: "1.4em",
    marginBottom: 40,
    fontFamily: "'Playfair Display', serif",
    letterSpacing: "1.1px",
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7em",
    },
  },

  secondTitleInspo: {
    fontSize: "2.5em",
    lineHeight: "1.4em",
    marginBottom: 40,
    fontFamily: "'Playfair Display', serif",
    letterSpacing: "1.1px",
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7em",
    },
  },

  secondTextAbout: {
    fontSize: 17,
    lineHeight: "29px",
    marginBottom: 40,
    color: "rgba(0,0,0,0.5)",
    textAlign: "justify",
  },

  secondTextInspo: {
    fontSize: 17,
    lineHeight: "29px",
    marginBottom: 40,
    color: "rgba(0,0,0,0.5)",
    textAlign: "justify",
  },

  secondTextBold: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: "29px",
    marginBottom: 40,
    color: "rgba(0,0,0,0.5)",
    textAlign: "justify",
  },

  imgBlockAbout: {
    width: "38%",
    backgroundImage:
      'url("https://res.cloudinary.com/dypkha59w/image/upload/v1690361736/lnaqbw43s2usf0jrkhwj.jpg")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
  },

  imgBlockInspo: {
    width: "38%",
    backgroundImage:
      'url("https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspo/inspo-collage.jpg?raw=true")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: 350,
    },
  },

  third: {
    backgroundColor: "whitesmoke",
    textAlign: "center",
    padding: "40px 0",
  },
  
  fourth: {
    display: "flex",
    justifyContent: " space-around",
    margin: "80px 0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  text1: {
    width: "90%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      marginBottom: 20,
    },
  },

  thirdInspo: {
    backgroundColor: "#FEFDF9",
    textAlign: "center",
    padding: "40px 0",
  },

  thirdTitle: {
    fontSize: 38,
    lineHeight: "1.4em",
    marginBottom: 20,
    fontFamily: "'Playfair Display', serif",
    fontWeight: "bold",
  },

  thirdSubtitle: {
    fontSize: 20,
    lineHeight: "29px",
    width: 550,
  },

  expert: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      flexDirection: "row",
    },
  },

  expertImg: {
    marginTop: 100,
    borderRadius: "50%",
  },

  inspo: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 50,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      flexDirection: "row",
    },
  },

  inspoImg: {
    boxShadow: "10px 10px 5px #ccc",
  },

  expertTitle: {
    fontSize: 14,
    lineHeight: "2em",
    fontWeight: 500,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    marginTop: 18,
  },

  expertName: {
    fontSize: 18,
    color: "#afafaf",
    margin: "2px 0 4px",
  },

  firstTips: {
    padding: "110px 0",
    height: "100%",
    textAlign: "center",
    backgroundImage:
      "url('https://imgur.com/DkQINMI.jpg')",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "right",
    },
  },

  imgBlock1: {
    width: "38%",
    backgroundImage:
      'url("https://imgur.com/OazhHFS.jpg")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: 350,
    },
  },

  imgBlock2: {
    width: "38%",
    backgroundImage:
      'url("https://imgur.com/jJfnsBZ.jpg")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: "300px"
    },
  },

  imgBlock3: {
    width: "38%",
    backgroundImage:
      'url("https://imgur.com/TrycEP7.jpg")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: "300px"
    },
  },

  imgBlock4: {
    width: "38%",
    backgroundImage:
      'url("https://imgur.com/C5zRxpk.jpg")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: "300px"
    },
  },
  imgBlock5: {
    width: "38%",
    backgroundImage:
      'url("https://res.cloudinary.com/dypkha59w/image/upload/v1690361212/ebtskltasmd8dt7pflvz.png")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: "300px"
    },
  },

  secondAbout: {
    display: "flex",
    justifyContent: " space-around",
    margin: "250px 0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  secondTitleShipping: {
    fontSize: "4em",
    lineHeight: "1.4em",
    marginBottom: 40,
    fontFamily: "'Playfair Display', serif",
    letterSpacing: "1.1px",
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7em",
    },
  },

  secondText: {
    fontSize: 17,
    lineHeight: "29px",
    marginBottom: 40,
    color: "rgba(0,0,0,0.5)",
    textAlign: "justify",
  },

  imgBlockShipping: {
    width: "48%",
    backgroundImage:
      'url("https://github.com/tessa-woodard/urban-roots/blob/main/src/images/shipping.png?raw=true")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: 350,
    },
  },
}))
