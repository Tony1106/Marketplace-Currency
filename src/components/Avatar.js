import Avatar from '@material-ui/core/Avatar';

import React from 'react'

export default function MAvatar(props) {
  return (
 <Avatar 
 src ={props.src}
sizes = {props.size}
 /> 
  )
}
