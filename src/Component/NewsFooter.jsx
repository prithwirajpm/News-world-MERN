import React from 'react'
import { Col } from 'react-bootstrap'
import News from '../asset/news.png'
import { Link } from 'react-router-dom'

function NewsFooter() {
   return (
      <div className='d-flex container-fulid pt-5 pb-5' style={{ backgroundColor: 'LightGray' }}>
         <div className='row w-100'>
            <Col className='d-flex justify-content-center align-items-center' lg={3} sm={12} xl={3}>
               <div className='d-flex flex-column' style={{ width: '300px' }}>
                  <img src={News} alt="" />
                  <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint architecto quas fugiat animi minima veritatis in quod!</p>

               </div>

            </Col>
            <Col className='d-flex justify-content-center align-items-center' lg={3} sm={12} xl={3}>
               <div className='d-flex flex-column'>
                  <Link to={'/'} className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Home Page</Link>
                  <Link to={'/addnewslist'} className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>News World</Link>
                  <Link to={'/login'} className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Login</Link>
                  <Link to={'/register'} className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Register</Link>
                  <Link to={'/register'} className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Register</Link>
               </div>
            </Col>
            <Col className='d-flex justify-content-center align-items-center' lg={3} sm={12} xl={3}>
               <div className='d-flex flex-column'>
                  <Link to={'https://www.thehindu.com'} target='_blank' className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>The Hindu</Link>
                  <Link to={'https://indianexpress.com/'} target='_blank' className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Indian Express</Link>
                  <Link to={'https://www.deccanchronicle.com/'} target='_blank' className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Deccan Chronicle</Link>
                  <Link to={'https://www.telegraphindia.com/'}  target='_blank' className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>The Telegraph</Link>
                  <Link to={'https://timesofindia.indiatimes.com'} target='_blank' className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Time of India</Link>
               </div>
            </Col>
            <Col className='d-flex justify-content-center align-items-center' lg={3} sm={12} xl={3}>
               <div className='d-flex flex-column'>
               <Link to={'https://www.instagram.com/'} target='_blank' className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Instagram</Link>
                  <Link to={'https://web.telegram.org/'} target='_blank' className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Telegram</Link>
                  <Link to={'https://www.facebook.com/'} target='_blank' className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Facebook</Link>
                  <Link to={'https://twitter.com/'} target='_blank' className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Twitter</Link>
                  <Link to={'https://www.linkedin.com/'} target='_blank' className='nav-link m-2' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>LinkedIn</Link>
               </div>
            </Col>
         </div>
      </div>
   )
}

export default NewsFooter