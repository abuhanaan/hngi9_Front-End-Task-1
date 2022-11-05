import React from 'react'
import { Row } from 'react-bootstrap'

export default function FooterComponent() {
  return (
    <>
      <footer className="bg-light text-center bottom">
        <div className="text-center" >
            <hr/>
            
            <Row>
                <div className="col-md-4 ml"><h6>Zuri<em>.</em>Internship</h6></div>
                <div className="col-md-4">HNG internship 9 - Front End Task</div>
                <div className="col-md-4"><img src='../I4G-Logo.png' alt='I4G-logo' width='70px' height='15px' /></div>
            </Row>
        </div>
      </footer>
    </>
  )
}
