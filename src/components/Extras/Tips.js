import React from "react"
import { useStyles } from "./useStyles"

const Tips = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.firstTips}>
        <h2 className={classes.titleAbout}>Our Programme</h2>
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
           Program Accreditation
          </h2>
          <p className={classes.secondTextAbout}>
          A high-quality education provides immense value, giving students the knowledge and skills needed to succeed after graduation.
          </p>
          <p className={classes.secondTextAbout}>
          Other benefits of attending a reputable institution include a higher return on investment, a better reputation among potential employers, and the ability to form stronger professional connections and gain access to robust alumni networks.
          </p>
          <p className={classes.secondTextAbout}>
          In the Malaysia, accreditation is awarded by independent accrediting agencies. These organizations periodically examine schools' curricular offerings to confirm that accredited colleges are providing students with a quality education.
          </p>
        </div>
        <div className={classes.imgBlock1} />
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            Bachelor of Art in <span className={classes.flowers}> Fine Arts</span>
          </h2>
          <p className={classes.secondTextBold}>
            Course description
          </p>
          <p className={classes.secondTextAbout}>
          Fine Art is a vital form of cultural expression that enriches our lives and challenges our views of the world. We rely on the arts to enrich our lives as well as to challenge our interpretation of the world around us. The discipline of Fine Arts invites us to expand our vision through creative experimentation and the unique possibilities of communicating with our surroundings through art.
          </p>
          <p className={classes.secondTextBold}>
            Entry Requirements
          </p>
          <p className={classes.secondTextAbout}>
          Minimum entry requirements to all programmes are Malaysian Higher School Certificate of Education and Malaysian Certificate of Education with a credit pass in Bahasa Malaysia. Applicants with previous professional / industrial experience may be accepted in lieu of some, or all, of the formal academic requirements.
          </p>
        </div>
        <div className={classes.imgBlock2} />
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            Bachelor of Art in <span className={classes.flowers}> Digital Arts</span>
          </h2>
          <p className={classes.secondTextBold}>
            Course description
          </p>
          <p className={classes.secondTextAbout}>
          The objectives of this programme are to produce graduates who can master the elements of digital media technology especially using web and multimedia as well as mobile technology as its main platforms and have the skills that needed to serve the society and the nation; to provide professional manpower in digital media technology who can work creatively, think critically and be able to transit their skills into diversified domains; and to produce graduates who have high quality of knowledge on design, development and management of digital media.
          </p>
          <p className={classes.secondTextBold}>
            Entry Requirements
          </p>
          <p className={classes.secondTextAbout}>
          Minimum entry requirements to all programmes are Malaysian Higher School Certificate of Education and Malaysian Certificate of Education with a credit pass in Bahasa Malaysia. Applicants with previous professional / industrial experience may be accepted in lieu of some, or all, of the formal academic requirements.
          </p>
        </div>
        <div className={classes.imgBlock3} />
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            Bachelor of Art in <span className={classes.flowers}> Music</span>
          </h2>
          <p className={classes.secondTextBold}>
            Course description
          </p>
          <p className={classes.secondTextAbout}>
          As a classical music student at the Institute, you will enjoy a dynamic and engaging student life. You will benefit immensely from the tutelage of acclaimed academics and performers. You will also have access to renowned musicians who visit the Institute. Additionally, you will step into a huge reservoir of talent and your peers will impact you profoundly.
          </p>
          <p className={classes.secondTextBold}>
            Entry Requirements
          </p>
          <p className={classes.secondTextAbout}>
          Minimum entry requirements to all programmes are Malaysian Higher School Certificate of Education and Malaysian Certificate of Education with a credit pass in Bahasa Malaysia. Applicants with previous professional / industrial experience may be accepted in lieu of some, or all, of the formal academic requirements.
          </p>
        </div>
        <div className={classes.imgBlock4} />
      </div>



    </>
  )
}

export default Tips
