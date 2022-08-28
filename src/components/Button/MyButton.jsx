import { Button } from '@material-ui/core'
import React from 'react'

import './MyButton.css'

const MyButton = ({title,icon}) => {
  return (
    <Button className='site_btn' variant='contained'  endIcon={icon?(<div className='icon_container'>{icon}</div>):null}>
        <span className='btn_text'>{title}</span>
    </Button>
  )
}

export default MyButton;