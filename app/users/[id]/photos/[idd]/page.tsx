import React from 'react'

interface Props{
    params:{idd:number , id:number};
}

const PhotosDetail = ({params:{idd , id}}:Props) => {
  return (
    <div>PhotosDetail {idd} {id}</div>
  )
}

export default PhotosDetail