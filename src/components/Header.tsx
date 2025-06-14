import React from 'react'
import { useNavigate } from '@tanstack/react-router';

import backArrow from '../assets/back-arrow.png';
import { useMe } from '../hooks/get-me.hook';

type Props = {
    roomText?: string;
    welcomeText?: string;
}

export default function Header({roomText, welcomeText}: Props) {
    const navigate = useNavigate();

    const {data: user, isLoading} = useMe()

    if (isLoading) return <div>Loading...</div>;
    

  return (
    <div className='banner_wrapper'>
      {roomText != null ? (
        <div className='banner_wrapper_options'>
          <button className='go_back_btn' onClick={()=> navigate({ to:'/'})}><img src={backArrow} alt="back_arrow" width="30" height="30" /></button>
          <p>Room: {roomText}</p> 
        </div>
      ) : (
        <p></p>
      )}
 
      <p>{welcomeText}</p>
      <p className='banner_wrapper_name'>{user?.nick}</p>
    </div>  
  )
}