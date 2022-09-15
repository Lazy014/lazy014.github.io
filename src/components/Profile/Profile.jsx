import { Typography } from '@material-ui/core';
import MyTimeline, {MyTimelineSeparator} from '../Timeline/MyTimeline'; 
import MyButton from '../Button/MyButton';
import resumeData from '../../utils/resumeData';
import React from 'react'
import './Profile.css'
import { GetAppRounded, Person } from '@material-ui/icons';
import { TimelineItem,TimelineContent } from '@material-ui/lab';

const MyTimelineItem=({title,text,link})=>(
        <TimelineItem>
        {/* <MyTimelineSeparator /> */}
        <TimelineContent className='timeline_content'>
            {link ? (<Typography className='timelineItem_txt'><span>{title} : </span><a href={link} target="">{text}</a> </Typography>) :(
                <Typography className='timelineItem_txt'><span>{title}  </span>{text} </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
    );

const Profile=()=> {
    //console.log(resumeDate.socials['facebook'].title);
  return (
    <div className='profile container_shadow'>
        <div className='profile_name'>
            <Typography className='name'>{resumeData.name}</Typography>
            <Typography className='title'>{resumeData.title}</Typography>
        </div>
        <figure className='profile_image'>
            <img src={require('../../assets/images/90774888_2497848250464274_904354623152717824_n.jpg')}  alt=''/>
        </figure>

        <div className='profile_info'>
            <MyTimeline icon={<Person/>} >
                <MyTimelineItem title='Email' text={resumeData.email} />
                <MyTimelineItem title='Birthday' text={resumeData.Birthday} />
                {Object.keys(resumeData.socials).map((key)=>(
                     <MyTimelineItem key={key} title={key} text={resumeData.socials[key].title} link={resumeData.socials[key].Link}/>
                ))}
            </MyTimeline>
        </div>
        <div className='btn_container'>
            <MyButton title='Download Resume' icon={<GetAppRounded/>} /> 
        </div> 
    </div>
  )
}

export default Profile;