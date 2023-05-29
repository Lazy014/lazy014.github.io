import { Typography } from "@material-ui/core";
import React from "react";
import resumeData from "../../utils/resumeData";

const ContactDetail = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.025)",
        paddingTop: 40,
        paddingBottom: 30,
        height: "100%",
      }}
    >
      <Typography
        variant="h5"
        style={{
          alignItems: "center",
          alignSelf: "center",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Contact Informations
      </Typography>
      <div style={{ margin: "60px 50px" }}>
        <Typography>
          {" "}
          <b>Address : </b>
          {resumeData.address}
        </Typography>
        <Typography>
          {" "}
          <b>Phone no. : </b>
          {resumeData.phone_no}
        </Typography>
        <Typography>
          {" "}
          <b>Job : </b>
          {resumeData.title}
        </Typography>
        <Typography>
          {" "}
          <b>Email : </b>
          {resumeData.email}
        </Typography>
        <Typography>
          {" "}
          <b>Facebook : </b>
          <a href={resumeData.socials.Facebook.Link}>
            {resumeData.socials.Facebook.title}
          </a>
        </Typography>
        <Typography>
          {" "}
          <b>Discord : </b>
          <a href={resumeData.socials.Discord.Link}>
            {resumeData.socials.Discord.title}
          </a>
        </Typography>
        <Typography>
          {" "}
          <b>LinkedIn : </b>
          <a href={resumeData.socials.LinkedIn.Link}>
            {resumeData.socials.LinkedIn.title}
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default ContactDetail;
