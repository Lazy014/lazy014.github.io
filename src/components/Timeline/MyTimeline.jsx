import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import "./MyTimeline.css";
import { Typography } from "@material-ui/core";

// export const MyTimelineSeparator = () =>
// {
//     return(
//     <TimelineSeparator className='separator_padding'>
//         <TimelineConnector />
//         <TimelineDot variant='outlined' className='timeline_dot' />

//     </TimelineSeparator>
//     );
// }

const MyTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className="timeline">
      <TimelineItem className="timeline_firstItem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">{icon}</TimelineDot>
        </TimelineSeparator>
        <TimelineContent className="timeline_content">
          <Typography variant="h6" className="timeline_header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
    </Timeline>
  );
};

export default MyTimeline;
