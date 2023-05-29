import {
  Grid,
  Tab,
  Typography,
  Tabs,
  TextField,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { Stack } from "react-bootstrap";
import React from "react";
import { useState } from "react";

import resumeData from "../../utils/resumeData";

import "./Projects.css";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 200,
    height: "auto",
  },
  controls: {
    display: "flex",
    fontWeight: "bold",
    borderRadius: 10,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "rgba(243, 25, 243, 0.45)",
      boxShadow: "0 0 2 2 white",
    },
  },

  playIcon: {
    height: 14,
    width: 14,
    borderRadius: 25,
    color: "white",
    backgroundColor: "black",
  },

  tags: {
    display: "inline",
    marginRight: 5,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    color: "rgba(255, 255, 255)",
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 5,
    marginBottom: 4,
    fontSize: "8 px",
  },
}));

const pictures = [
  require("../../assets/images/OBE.png"),
  require("../../assets/images/FPL.png"),
  require("../../assets/images/Anime.png"),
  require("../../assets/images/Wi-Fi.png"),
  require("../../assets/images/LineOfAction.png"),
  require("../../assets/images/WeatherApp.png"),
  require("../../assets/images/RapidRoll.png")
];

const Projects = () => {
  const [tabValue, setTabValue] = useState("All");

  const [selValue, setSelValue] = useState([]);

  const setTag = (val) => {
    //console.log(selValue);
    return val == null ? "Type here (C++, Java, Javascript, Python..." : "";
  };

  const isInLanguage = (project, keyword) => {
    return project.Languages.includes(keyword);
  };

  const isInFrameWork = (project, keyword) => {
    return project.Frameworks.includes(keyword);
  };

  const isIncluded = (project) => {
    if (selValue.length === 0) return true;
    for (let i = 0; i < selValue.length; i++) {
      if (isInLanguage(project, selValue[i])) continue;
      else if (!isInFrameWork(project, selValue[i])) return false;
    }
    return true;
  };

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className="section_title">
        <Typography variant="h5">
          <span></span>Projects
        </Typography>
      </Grid>
      <Grid container xs={12}>
        <Grid container xs={12} style={{ marginBottom: 20 }}>
          <Grid item xs={8}>
            <Tabs
              value={tabValue}
              onChange={(event, newValue) => {
                setTabValue(newValue);
              }}
            >
              {resumeData.tags.map((val, ind) => (
                <Tab
                  key={ind}
                  label={val}
                  value={val}
                  sx={{ fontSize: "8px" }}
                  className="tag_tab"
                />
              ))}
            </Tabs>
          </Grid>

          <Grid item xs className="filter_tag">
            <Autocomplete
              multiple
              id="tags-filled"
              options={resumeData.langNframe}
              color="white"
              getOptionLabel={(option) => option}
              onChange={(event, newValue) => {
                setSelValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder={setTag(params.InputProps.startAdornment)}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid className="projects" container spacing={2}>
            {resumeData.projects.map((project, index) => (
              <React.Fragment key={project.title}>
                {(tabValue === project.tag || tabValue === "All") &&
                isIncluded(project) ? (
                  <Grid item xs={12}>
                    <Card className={classes.root}>
                      <CardMedia
                        className={classes.cover}
                        image={pictures[index]}
                        title="Live from space album cover"
                      />
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography component="h1" variant="h6">
                            {project.title}
                          </Typography>
                          <div
                            style={{
                              fontWeight: "bold",
                              marginTop: 3,
                              color: "lightgray",
                              display: "flex",
                              flexFlow: "row wrap",
                              paddingLeft: 0,
                            }}
                          >
                            {project.Languages.map((lang, index) => (
                              <Chip
                                key={index}
                                className={classes.tags}
                                label={lang}
                              />
                            ))}
                            {project.Frameworks.map((lang, index) => (
                              <Chip
                                key={index}
                                className={classes.tags}
                                label={lang}
                              />
                            ))}
                            {project.Features.map((lang, index) => (
                              <Chip
                                key={index}
                                className={classes.tags}
                                label={lang}
                              />
                            ))}
                          </div>
                          <Typography>{project.description}</Typography>
                        </CardContent>
                        {project.link ? <Button
                          href={project.link}
                          style={{
                            textDecoration: "none",
                            marginRight: "0px",
                            marginLeft: "auto",
                          }}
                        >
                          <Stack
                            className={classes.controls}
                            direction="horizontal"
                          >
                            <GitHub
                              className={classes.playIcon}
                              style={{ margin: 10 }}
                            />

                            <Typography
                              style={{
                                paddingRight: 10,
                                fontWeight: "bold",
                                fontSize: 10,
                              }}
                            >
                              Show in Github
                            </Typography>
                          </Stack>
                        </Button> : null}
                      </div>
                    </Card>
                  </Grid>
                ) : null}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
/*
<Card onClick={() => console.log(isIncluded(project))}>
                      <CardActionArea>
                        <Stack direction="horizontal" gap={2}>
                          <CardMedia
                            maxWidth={false}
                            style={{ width : 50 }}
                            image={require("../../assets/images/ProfilePic.jpg")}
                          />
                          <CardContent>
                            <Typography>{project.title}</Typography>
                          </CardContent>
                        </Stack>
                      </CardActionArea>
                    </Card>

*/
