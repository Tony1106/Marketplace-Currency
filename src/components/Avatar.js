import Avatar from '@material-ui/core/Avatar';

import React from 'react'

export default function MAvatar(props) {
  let {src, size} = props;
  if(!src) {
    src = require('../asset/img/default-avatar.png')
  }
  return (
   <div style={{display: 'flex', flexDirection: 'column',alignItems:'center'}}>
<Avatar 
 src ={src}
  sizes = {size}
 /> 
 <span style={{fontSize: "13px", textAlign: 'center'}}> {props.userName}</span>
   </div> 
 
  )
}
