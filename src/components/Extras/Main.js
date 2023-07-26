import React from "react"
import { useStyles } from "./useStyles"

const Main = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.firstAbout}>
        <h2 className={classes.titleAbout}>Home Page</h2>
      </div>
      <div className={classes.fourth}>
        <div className={classes.text1}>
        <h2 className={classes.thirdTitle}>Commitment</h2>
          <p className={classes.secondTextAbout}>
          At Malaysia Art University, creativity knows no bounds. Established with a vision to nurture the artistic spirits of tomorrow, we are a leading institution dedicated to providing unparalleled education and fostering a vibrant community of artists. Our Commitment to Excellence, Malaysia Art University takes pride in its commitment to excellence in arts education. With a diverse range of programs, we empower our students to explore their creative potential and hone their skills under the guidance of experienced and renowned faculty.         
          </p>
          <p className={classes.secondTextAbout}>
          We understand that a conducive environment plays a crucial role in the creative process. Our campus boasts state-of-the-art facilities, including cutting-edge studios, fully-equipped art labs, and spacious galleries, offering students the perfect setting to unleash their imagination.Whether you're inclined towards fine arts, design, media studies, or performing arts, we offer comprehensive programs that blend theory with hands-on practice. Our curriculum is designed to nurture critical thinking, artistic expression, and technical proficiency, preparing our graduates to excel in the dynamic world of arts.
          </p>
          <p className={classes.secondTextAbout}>
          </p>
        </div>
      </div>
      <div className={classes.third}>
        <h2 className={classes.thirdTitle}>Our vision</h2>
        <div className={classes.second}>
        <div className={classes.text}>
          <p className={classes.secondTextAbout}>
          At Malaysia Art University, we celebrate creativity and inspire artistic minds to reach new heights of imagination and innovation. Our institution stands as a beacon of excellence in arts education, fostering a diverse community of students and faculty dedicated to the pursuit of artistic mastery.
          <ul>
            <li>Our Vision: Malaysia Art University envisions becoming a global center of artistic excellence, nurturing the next generation of visionary artists, designers, and creative professionals who will shape the future of the art world.
            </li>
            <li>
            State-of-the-Art Facilities:Our campus is equipped with state-of-the-art facilities designed to cater to the diverse needs of our students. From spacious studios and well-equipped art labs to cutting-edge multimedia centers, we ensure our students have access to the latest tools and technology that foster their creative expression.
            </li>
            <li>
            Inspiring Curriculum:At Malaysia Art University, we believe in a holistic approach to education, combining theoretical knowledge with practical experience. Our curriculum is thoughtfully designed to challenge students' creativity, critical thinking, and problem-solving skills. We encourage interdisciplinary learning and collaborative projects, fostering a dynamic and innovative learning environment.
            </li>
          </ul>
          </p>
        </div>
        <div className={classes.imgBlock5} />
      </div>
        </div>
    </>
  )
}

export default Main
