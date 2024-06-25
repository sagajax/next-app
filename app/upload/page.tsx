'use client';
import { CldUploadWidget,CldImage } from 'next-cloudinary'
import React, { useState } from 'react'

interface CloudinaryResult{
    public_id:string;
}
const UploadPage = () => {
  const [publicID,setPublicID] = useState('');   

  return (
    <>
    {publicID && <CldImage
    src={publicID} width={270} height={180 } alt="gourav" />}
    <CldUploadWidget 
        uploadPreset='kedmty4z'
        onUpload={(result, widget) => {
            if(result.event !== "success") return;
            console.log(result)
            const info = result.info as CloudinaryResult;
            setPublicID(info.public_id)
            console.log(result)
        }}
        >
        {({open})=>
             <button 
             className='btn btn-primary'
             onClick={() => open()}>

                Upload 
             </button> }
    </CldUploadWidget>
    </>
  )
}

export default UploadPage