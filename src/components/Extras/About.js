import React from "react"
import { useStyles } from "./useStyles"

const AboutUs = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.firstAbout}>
        <h2 className={classes.titleAbout}>About Us</h2>
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
           Message from our Chancellor {""}
            <span className={classes.flowers}> Prof Dr. Ooi Bak Tu</span>
          </h2>
          <p className={classes.secondTextAbout}>
          It gives me immense pleasure to welcome you to the academic world of Malaysia Art University. This university is a belief envisioned for creating better human beings, with roots embedded in strong academics and who are strong enough to survive the upheavals of the economies of the world. University strives to make far-reaching and positive impact on the world through the education of our students and through our pioneering Research. As an integral part of this enterprise, the University has also plans to disseminate knowledge and encourage learning and thus make a significant contribution towards social and economic growth. The eco-friendly campus in the peaceful town Kaithal, is equipped with high class facilities.
          </p>

        </div>
        <div className={classes.imgBlockAbout} />
      </div>
      <div className={classes.third}>
        <h2 className={classes.thirdTitle}>Board of Academic</h2>
        <span className={classes.thirdSubtitle}>
          Members
          <br />
        </span>
        <div className={classes.expert}>
        <div>
            <img
              className={classes.expertImg}
              src="https://imgur.com/2pzCmgZ.jpg"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>Prof Dr. Babara Temple</h3>
            <h3 className={classes.expertTitle}>Vice Chancellor</h3>
          </div>
          <div>
            <img
              className={classes.expertImg}
              src="https://imgur.com/p0ozRFz.jpg"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>Dr. Natalie James</h3>
            <h3 className={classes.expertTitle}>Dean, School Of Digital Art</h3>
          </div>
          <div>
            <img
              className={classes.expertImg}
              src="https://imgur.com/r7kV0df.jpg"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>Dr. Kimberly Tabliern</h3>
            <h3 className={classes.expertTitle}>Dean, School Of Music</h3>

          </div>
          <div>
            <img
              className={classes.expertImg}
              src="https://imgur.com/4NLnh7v.jpg"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>Prof. Dr. Alexander Peter</h3>
            <h3 className={classes.expertTitle}>Dean, School Of Fine Art</h3>

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
