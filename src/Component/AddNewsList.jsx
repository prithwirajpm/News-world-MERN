import React from 'react'
import NewsDashBoard from '../Pages/NewsDashBoard'
import NewsCard from './NewsCard'
import { Col } from 'react-bootstrap';
import AddNews from './AddNews';

function AddNewsList() {
  return (
    <div>
        <NewsDashBoard />
        <div className='d-flex justify-content-end align-items-start m-3'>
            <AddNews />
        </div>
        <div className='row w-100 mt-5 mb-5'>
            <Col className='d-flex justify-content-center align-items-center' lg={4} sm={2} xl={4}>
                <NewsCard />
            </Col>
            <Col className='d-flex justify-content-center align-items-center' lg={4} sm={2} xl={4}>
                <NewsCard />
            </Col>
            <Col className='d-flex justify-content-center align-items-center' lg={4} sm={2} xl={4}>
                <NewsCard />
            </Col>

        </div>
    </div>
  )
}

export default AddNewsList