import React from 'react'
import { Col } from 'react-bootstrap'

function NewsFooter() {
  return (
    <div className='d-flex container-fulid pt-5 pb-5' style={{backgroundColor:'LightGray'}}>
      <div className='row w-100'>
        <Col className='d-flex justify-content-center align-items-center' lg={3} sm={12} xl={3}>
           <div className='d-flex flex-column'>
              <a href="http://">asdf</a>
              <a href="http://">asd</a>
              <a href="http://">ASDF</a>
              <a href="http://">ASDF</a>
           </div>
          
        </Col>
        <Col className='d-flex justify-content-center align-items-center' lg={3} sm={12} xl={3}>
        <div className='d-flex flex-column'>
              <a href="http://">asdf</a>
              <a href="http://">asd</a>
              <a href="http://">ASDF</a>
              <a href="http://">ASDF</a>
           </div>
        </Col>
        <Col className='d-flex justify-content-center align-items-center' lg={3} sm={12} xl={3}>
        <div className='d-flex flex-column'>
              <a href="http://">asdf</a>
              <a href="http://">asd</a>
              <a href="http://">ASDF</a>
              <a href="http://">ASDF</a>
           </div>
        </Col>
        <Col className='d-flex justify-content-center align-items-center' lg={3} sm={12} xl={3}>
        <div className='d-flex flex-column'>
              <a href="http://">asdf</a>
              <a href="http://">asd</a>
              <a href="http://">ASDF</a>
              <a href="http://">ASDF</a>
           </div>
        </Col>
      </div>
    </div>
  )
}

export default NewsFooter