import React from 'react'
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

import { PiTiktokLogo } from "react-icons/pi";
const SocialMedia = () => {
  return (
    <div className='flex items-center'>
        <span className='mr-3 text-2xl text-slate-700 hover:text-red-700 hover:cursor-pointer'><SlSocialFacebook /></span>
        <span className='mr-3 text-2xl text-slate-700 hover:text-red-700 hover:cursor-pointer'><PiTiktokLogo /></span>
        <span className=' text-2xl text-slate-700 hover:text-red-700 hover:cursor-pointer'><SlSocialInstagram /></span>
    </div>
  )
}

export default SocialMedia