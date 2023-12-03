import React from 'react'
import './NewsDasBoard.css'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

function NewsDashBoard() {
  return (
    <div>
      <div className='profileImg d-flex justify-content-start align-items-end'>
        <div className='rounded-circle shadow m-5' style={{ width: '200px', height: '200px', backgroundColor: 'white' }}>
          <div className='d-flex mt-5 flex-column justify-content-center align-items-end' style={{ width: '200px', height: '200px', }}>
            <div className='rounded-circle mt-1 d-flex justify-content-center align-items-center' style={{ width: '40px', height: '40px', backgroundColor: 'black' }}>

              <label className='btn'><input type="file" style={{ display: 'none' }} />
                <EditIcon style={{ color: 'white' }} />
              </label>

            </div>

          </div>

        </div>

      </div>
      <div className='w-100 d-flex justify-content-end align-items-start' >
        <div className='border w-100'>
          <ul className="nav nav-tabs ">
            <li className="nav-item ms-auto">
            <Link to={'/addnewslist'} className='nav-link' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>News</Link>
            </li>
            <li className="nav-item">
              <Link to={'/listcomment'} className='nav-link' aria-current="page" style={{ textDecoration: 'none', color: 'Black' }}>Command</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Details</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NewsDashBoard