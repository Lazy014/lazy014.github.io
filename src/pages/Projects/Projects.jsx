import { Grid, Tab, Typography, Tabs, TextField, Card, CardMedia, CardContent, CardActionArea } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react'
import { useState } from 'react';

import resumeData from '../../utils/resumeData';

import './Projects.css';

const Projects=()=> {

  const [tabValue, setTabValue] = useState('All');

  const [selValue, setSelValue] = useState([]);

  

  const setTag = (val) => {
    //console.log(selValue);
    return val == null ? "Keywords (Language, Frameworks..." : "";
  }

  const isInLanguage = (project, keyword) => {
    return project.Languages.includes(keyword);
  }

  const isInFrameWork = (project, keyword) => {
    return project.Frameworks.includes(keyword);
  }

  const isIncluded = (project) => {
    if(selValue.length === 0) return true;
    for(let i=0; i<selValue.length; i++)
    {
      if(isInLanguage(project, selValue[i])) continue;
      else if(!isInFrameWork(project, selValue[i])) return false;
    }
    return true;
  }

  return (
    <Grid container>
      <Grid item xs={12} className='section_title'>
        
        <Typography variant="h5"><span></span>Projects</Typography>
        
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={8}>
            <Tabs value={tabValue} onChange={(event, newValue)=>{setTabValue(newValue)}}>
        
              {resumeData.tags.map((val, ind)=>(
                <Tab key={ind} label={val} value={val} sx={{fontSize:'8px'}} className='tag_tab'/>
              ))}

            </Tabs>
          </Grid>
          
          <Grid item xs>
          <Autocomplete
            multiple
            id="tags-filled"
            options={resumeData.langNframe}
            getOptionLabel={(option) => option}
            onChange={(event, newValue)=>{setSelValue(newValue)}}
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
          <Grid container spacing={2}>
            {resumeData.projects.map((project)=>(
              <React.Fragment key={project.title}>
                {(tabValue === project.tag || tabValue === "All") && isIncluded(project) ?
                (
                  <Grid  item xs={6}>
                    <Card onClick={()=> console.log(isIncluded(project))}>
                      <CardActionArea>
                        <CardMedia image={project.image}/>
                        <CardContent>
                          <Typography>{project.title}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ): null}
              </React.Fragment>
              
              
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Projects;