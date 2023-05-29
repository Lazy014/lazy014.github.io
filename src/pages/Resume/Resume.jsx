import React, { useState } from "react";
import SchoolSharpIcon from "@material-ui/icons/SchoolSharp";
import WorkSharp from "@material-ui/icons/WorkSharp";
import resumeData from "../../utils/resumeData";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Image, Stack } from "react-bootstrap";

import "./Resume.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "16px 16px",
    backgroundColor: "rgba(0, 0, 0, .55)",
    color: "aliceblue",
    boxShadow: "0px 0px 1px 1px black",
    fontSize: "14px",
    lineHeight: "20px",
  },
  paperSkill: {
    padding: "16px 16px",
    backgroundColor: "rgba(125, 125, 125)",
    color: "white",
    boxShadow: "0px 0px 1px 1px black",
    fontSize: "14px",
    lineHeight: "20px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  verticallyCenterContent: {
    margin: "auto 0",
  },
  imageText: {
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    borderRadius: 35,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    margin: "auto",
    overflow: "hidden",
    fontSize: 12,
    paddingTop: 25,
    fontWeight: "bold",
  },
}));

const Resume = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(
    Array.from({ length: resumeData.skills.length }, (i) => (i = false))
  );

  const handleMouseEnter = (id) => {
    //hover[id] = true
    let newHover = hover.map((val, ind) => {
      if (id === ind) {
        return true;
      } else {
        return val;
      }
    });

    setHover(newHover);
    //console.log(hover);
  };

  const handleMouseLeave = (id) => {
    let newHover = hover.map((val, ind) => {
      if (id === ind) {
        return false;
      } else {
        return val;
      }
    });
    //newHover[id] = false
    setHover(newHover);
    //console.log(hover);
  };
  console.log("root : ", hover);
  return (
    <>
      <Grid container className="section pad_30">
        <Grid item className="section_title">
          <Typography variant="h5">
            <span></span>About Me
          </Typography>
        </Grid>
        <Grid item xs={12} className="section_text pad_10">
          <Typography>{resumeData.aboutMe}</Typography>
        </Grid>
      </Grid>

      <Grid container className="section pad_30">
        <Grid item className="section_title">
          <Typography variant="h5">
            <span></span>Skills
          </Typography>
        </Grid>
        <Grid item xs={12} className="section_text pad_10">
          <div style={{ display: "flex", flexFlow: "row wrap" }}>
            {resumeData.skills.map((skill, index) => (
              <article
                style={{
                  height: 70,
                  width: 70,
                  margin: 5,
                  borderRadius: 35,
                  position: "relative",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                onMouseOver={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Image
                  roundedCircle
                  key={index}
                  src={skill.imgsrc}
                  style={{ objectFit: "cover" }}
                  /* height={'100%'} width={'100%'} */ alt=""
                />
                {hover[index] && (
                  <Typography className={classes.imageText}>
                    {skill.label}
                    <br />
                    {skill.proficiency}/10
                  </Typography>
                )}
              </article>
            ))}
          </div>
        </Grid>
      </Grid>

      <Grid container className="section pad_30">
        <Grid item className="section_title">
          <Typography variant="h5">
            <span></span>Qualifications
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={12} dx>
            <Timeline className="timeline_education">
              <TimelineItem className="timeline_firstItem">
                <TimelineSeparator>
                  <TimelineDot className="timeline_dot_header">
                    <WorkSharp />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent className="timeline_content">
                  <Typography variant="h5">Work Experience</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    className="timeline_dot"
                    variant="outlined"
                  ></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Stack direction="horizontal" gap={3}>
                      <figure className="samsung_logo">
                        <img
                          src={require("../../assets/images/original-samsung-logo-10.png")}
                          alt=""
                        />
                      </figure>
                      <div>
                        <Typography variant="h6" component="h2">
                          Samsung R&D Institute, Bangladesh.
                        </Typography>
                        <p>Software Engineeer</p>
                      </div>
                      <div className="years_spent">
                        <p>June 2022 - Present</p>
                      </div>
                    </Stack>
                    <Typography>
                      <br /> Currently a part of the Watch Notifications Team.
                      Main focus of work is Android Development in Java.
                    </Typography>
                    <Typography className="top_10">
                      <br />A brief summay of what I have done till now :
                      <ul>
                        <li>
                          Implemented new features in Samsung Galaxy Watch
                          Series(Watch 4, Watch 5 and upcoming Watch 6)
                          enhancing user experience and meeting user demands.
                        </li>
                        <li>
                          Wrote Unit test cases in JUNIT4 covering around 4,000
                          lines (35%-40%) of our source code ensuring the
                          correctness and quality of our code.
                        </li>
                        <li>
                          Refactored existing source code maintaining SOLID
                          principles and in TDD approach making the code more
                          readable, scalable and testable.
                        </li>
                        <li>
                          Fixed bugs that were found by us or reported to us by
                          QA team by analyzing the code base, finding the root
                          cause and coming up with a proper solution.
                        </li>
                      </ul>
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid item xs={12}>
            <Timeline className="timeline_education">
              <TimelineItem className="timeline_firstItem">
                <TimelineSeparator>
                  <TimelineDot className="timeline_dot_header">
                    <SchoolSharpIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent className="timeline_content">
                  <Typography variant="h5">Education</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    className="timeline_dot"
                    variant="outlined"
                  ></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Stack direction="horizontal" gap={3}>
                      <figure className="buet_logo">
                        <img
                          src={require("../../assets/images/1200px-BUET_LOGO.svg.png")}
                          alt=""
                        />
                      </figure>
                      <div>
                        <Typography variant="h6" component="h2">
                          Bangladesh University of Engineering and Technology
                        </Typography>
                        <p>BSc. in Computer Science and Engieering</p>
                      </div>
                      <div className="years_spent">
                        <p>Feb 2017 - May 2022</p>
                      </div>
                    </Stack>
                    <Typography>
                      Completed my undergrad here. Learned topics likes{" "}
                      <b>
                        Object Oriented Programming, Design Patterns, Data
                        Structures & Algorithms, Computer Architecture,
                        Compilers, Operating Systems, Computer Networks,
                        Computer Security, Computer Graphics, Artificial
                        Intelligence, Graph Theory, High Performance Database
                        System, Machine Learning, Pattern Recognition and
                        Microprocessors, Microcontrollers & Embedded Systems
                      </b>{" "}
                      etc.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;

// const useStyles = makeStyles(theme => ({
//   paper: {
//     padding: "6px 16px"
//   },
//   secondaryTail: {
//     backgroundColor: theme.palette.secondary.main
//   },
//   verticallyCenterContent: {
//     margin: "auto 0"
//   }
// }));

// const MyTimelineItem=({title,text,link})=>(
//   // <TimelineItem>

//   //   <TimelineSeparator className='separator_padding'>
//   //     <TimelineConnector />
//   //     <TimelineDot variant='outlined' className='timeline_dot' />

//   // </TimelineSeparator>

//   //   <TimelineContent className='gg'>
//   //   <Paper elevation={3} className={classes.paper}>
//   //       <Typography >
//   //         {/* className='timeline_content' className='timelineItem_txt' */}
//   //         {title}
//   //       </Typography>
//   //       <Typography > {text} </Typography>

//   //       {/* {link ? (<Typography className='timelineItem_txt'><span>{title} : </span><a href={link} target="">{text}</a> </Typography>) :(
//   //           <Typography className='timelineItem_txt'>{title}</Typography>
//   //           <Typography> {text} </Typography>
//   //       )} */}
//   //     </Paper>
//   //   </TimelineContent>

//   // </TimelineItem>
//   <></>
// );

// const Resume=()=> {
//   const classes = useStyles();

//   return (
//     <>
//     <Grid container className='section pad_30'>
//       <Grid item className='section_title'>

//         <Typography variant="h5"><span></span>About Me</Typography>

//       </Grid>
//       <Grid item xs={12} className='section_text pad_10'>
//         <Typography >{resumeData.aboutMe}</Typography>
//       </Grid>

//     </Grid>
//     <Grid container className='section pad_30'>
//       <Grid item className='section_title'>

//         <Typography variant="h5"><span></span>Qualifications</Typography>

//       </Grid>
//       <Grid container xs={12} spacing={2} className='sect'>
//         <Grid item xs={6}>
//           <MyTimeline title='Education' icon={<SchoolSharpIcon/>}/>
//           <Timeline className='timeline' align="alternate">
//             <TimelineItem>

//               <TimelineSeparator className='separator_padding'>

//                 <TimelineDot variant='outlined' className='timeline_dot' />
//                 {/* <TimelineConnector /> */}
//             </TimelineSeparator>

//               <TimelineContent className='gg'>
//               <Paper elevation={3} className={classes.verticallyCenterContent}>
//                   <Typography >
//                     {/* className='timeline_content' className='timelineItem_txt' */}
//                     Bangladesh University of Engineering and Tecnology
//                   </Typography>
//                   <Typography > Bangladesh University of Engineering and Tecnology </Typography>

//                   {/* {link ? (<Typography className='timelineItem_txt'><span>{title} : </span><a href={link} target="">{text}</a> </Typography>) :(
//                       <Typography className='timelineItem_txt'>{title}</Typography>
//                       <Typography> {text} </Typography>
//                   )} */}
//                 </Paper>
//               </TimelineContent>

//             </TimelineItem>
//           </Timeline>
//         </Grid>
//         <Grid item xs={6}>
//           <MyTimeline title='Work Experience' icon={<WorkSharp/>}>
//             <MyTimelineItem title="Bangladesh University of Engineering and Tecnology" text="anjum ksjhdfhjkshdkfhsjkdfkshdjkfhshjkdfhjshfdhjsdkhfkhshjdfjhjsdhfksjdjkfhjsdjk nsnkjdfhjkshdhsjhvsjkvsdjkbvbskdbvbsdbbv \n asjfdjasbkdjaskdaskdnanjsdnansjkdakjdasjnd" />
//           </MyTimeline>
//       </Grid>
//     </Grid>
//   </Grid>

//     {/* <Grid container className=''></Grid> */}
//     </>
//   )
// }

// export default Resume;
