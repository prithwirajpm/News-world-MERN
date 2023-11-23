import React from 'react'
import { Col } from 'react-bootstrap'
import NewsCard from './NewsCard'

function NewsBody() {
    return (
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

    )
}

export default NewsBody