import { Card, Grid, Tab, Typography, Tabs, TextField} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react'
import { useState } from 'react';

import resumeData from '../../utils/resumeData';

import './Projects.css';

const Projects=()=> {

  resumeData.tags.map((val,ind)=> console.log(ind,val));

  const [tabValue, setValue] = useState('All');
  
  const setTag = (val) =>
  {
    console.log(val);
    return val==null?"Keywords (Language, Frameworks...":"";
  }

  return (
    <Grid container>
      <Grid item xs={12} className='section_title'>
        
        <Typography variant="h5"><span></span>Projects</Typography>
        
      </Grid>
      <Grid container>
        <Grid item xs={8}>
          <Tabs value={tabValue} onChange={(event, newValue)=>{setValue(newValue)}}>
      
            {resumeData.tags.map((val, ind)=>(
              <Tab key={ind} label={val} value={val} sx={{fontSize:'8px'}} className='tag_tab'/>
            ))}

          </Tabs>
        </Grid>
        
        <Grid item xs>
        <Autocomplete
          multiple
          // id="tags-standard"
          options={Object.keys(resumeData.socials)}
          getOptionLabel={(option) => option}
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
    </Grid>
    
    // <Card style={{backgroundColor:'yellow'}}>
    //     Projects
    // </Card>
  )
}

export default Projects;