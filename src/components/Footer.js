import React from 'react'
import { Stack } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
        <div className='footer  w-100'>
            <hr/>
            <Stack direction="horizontal" gap={3} className='mt-2 mb-2'>
                <div className="">Zuri.Internship</div>
                <div className="ms-auto">HNG internship 9 - Front End Task</div>
                <div className="ms-auto"><img src='../I4G-Logo.png' alt='I4G-logo' width='70px' height='15px' /></div>
            </Stack>
        </div> 
    </>
  )
}
