import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({percentage}) => {
  return (
    <CircularProgressbar value={percentage} text={`${percentage}%`} className='bar' styles={{
        path:{
            stroke:'#4B0082'
        }
    }}/>
  )
}

export default CircularProgress