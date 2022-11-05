import React from 'react'
import { Button } from 'react-bootstrap' 
import { Link } from 'react-router-dom'

export default function LinkSection() {
  return (
    <>
        <div className='d-grid gap-3'>
            <a href='https://training.zuri.team/' target='_blank' rel="noreferrer">
                <Button variant="secondary" size="lg" className='w-100'>
                    Twitter
                </Button>
            </a>
            <a href='https://training.zuri.team/' target='_blank' rel="noreferrer">
                <Button id='btn__zuri' variant="secondary" size="lg" className='w-100'>
                    Zuri Team
                </Button>
            </a>
            <a href='https://books.zuri.team/' target='_blank' rel="noreferrer">
            <Button id='books' variant="secondary" size="lg" className='w-100'>
                Zuri Book
            </Button>
            </a>
            <a href='https://books.zuri.team/' target='_blank' rel="noreferrer">
            <Button id='book__python' variant="secondary" size="lg" className='w-100'>
                Python Books
            </Button>
            </a>
            <a href='https://background.zuri.team' target='_blank' rel="noreferrer">
                <Button id='pitch' variant="secondary" size="lg" className='w-100'>
                    Background Check For Coders
                </Button>
            </a>
            <a href='https://books.zuri.team/design-rules' target='_blank' rel="noreferrer">
                <Button id='book__design' variant="secondary" size="lg" className='w-100'>
                    Design Books
                </Button>
            </a>
            <Link id='contact' to='/contact'>
                <Button variant="secondary" size="lg" className='w-100'>Contact Me</Button>
            </Link>
        </div>
            
        <div className='d-flex justify-content-center'>
        <span className="fa-stack fa-2x">
            <i className="fa-brands fa-github fa-money-check-dollar fa-flip"></i>
            <i className="fa-brands fa-slack fa-money-check-dollar fa-flip"></i>
            </span>
        </div>
        </>
  )
}
