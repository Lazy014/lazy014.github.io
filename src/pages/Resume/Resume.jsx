import React from 'react';
import { Grid , Typography} from '@material-ui/core';
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import { TimelineItem,TimelineContent } from '@material-ui/lab';

import MyTimeline, {MyTimelineSeparator} from '../../components/Timeline/MyTimeline';

import resumeData from '../../utils/resumeData';


import './Resume.css'

const MyTimelineItem=({title,text,link})=>(
  <TimelineItem>
    <MyTimelineSeparator />
    <TimelineContent >
        <Typography >
          {/* className='timeline_content' className='timelineItem_txt' */}
          {title}
        </Typography> 
        <Typography> {text} </Typography>
        
        {/* {link ? (<Typography className='timelineItem_txt'><span>{title} : </span><a href={link} target="">{text}</a> </Typography>) :(
            <Typography className='timelineItem_txt'>{title}</Typography> 
            <Typography> {text} </Typography>
        )} */}
    </TimelineContent>
  </TimelineItem>
);


const Resume=()=> {
  return (
    <>
    <Grid container className='section pad_30'>
      <Grid item className='section_title'>
        
        <Typography variant="h5"><span></span>About Me</Typography>
        
      </Grid>
      <Grid item xs={12} className='section_text pad_10'>
        <Typography >{resumeData.aboutMe}</Typography>
      </Grid>

    </Grid>
    <Grid container className='section pad_30'>
      <Grid item className='section_title'>
        
        <Typography variant="h5"><span></span>Qualifications</Typography>
        
      </Grid>
      <Grid item xs={12} className='sect'>
        
        <Grid item md={6}>
          <MyTimeline title='Education' icon={<SchoolSharpIcon/>}>
            <MyTimelineItem title="Bangladesh University of Engineering and Tecnology" text="anjum" />
          </MyTimeline>
        </Grid>
        <Grid item md={6}>
          
        </Grid>
      </Grid>
    </Grid>
    {/* <Grid container className=''></Grid> */}
    </>
  )
}

export default Resume;