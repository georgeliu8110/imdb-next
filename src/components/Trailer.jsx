'use client'

import React from 'react'
import ReactPlayer from 'react-player'

export default function Trailer({video_key}){

  return (
    <>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${video_key}`} playing={false} controls={true}/>
    </>
  )
}