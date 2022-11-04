import React from 'react'

export default function Profile() {
  return (
    <>
      <div className='mt-2'>
        <div className='d-grid justify-content-center'>
            <img src={require('../myPic.png')} alt='profile-pic' id='profile-img'></img>
        </div>
        <div className='d-grid justify-content-center' >
            <h5 id='twitter'>@Adewunmimustee</h5>
            <p id='slack'>Mustopha Qomorudeen</p>
        </div>
      </div>
    </>
  )
}
