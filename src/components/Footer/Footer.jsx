import React from 'react'
import { Typography } from '@material-ui/core'

import resumeData from '../../utils/resumeData'

import './Footer.css'
import { Link} from 'react-router-dom'


const Footer=()=> {
  return (
    <div className='footer'>
      <div className='footer_left'>
          <Typography className="footer_name">Developed By <Link to='/'>{resumeData.name}</Link></Typography>
        
        
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">Design idea from <a href='https://www.youtube.com/channel/UCSEy8lBnjp42x5W1JPcca0w'>Salman Fazal</a></Typography>
      </div>
    </div>
  )
}

export default Footer