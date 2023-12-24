import './App.css';
import NewsBody from './Component/NewsBody';
import NewsFooter from './Component/NewsFooter';
import NewsNavBar from './Component/NewsNavBar';
import '../src/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NewsAuth from './Component/NewsAuth';
import NewsDashBoard from './Pages/NewsDashBoard';
import ListCommand from './Component/ListCommand';
import AddNewsList from './Component/AddNewsList';
import Admin from './AdminComponent/Admin';
import UserList from './AdminComponent/UserList';
import { useState } from 'react';
import NewsList from './AdminComponent/NewsList';
import AdminDash from './AdminComponent/AdminDash';
import NewsReport from './Component/NewsReport';

function App() {
  const [showadmin,setshowadmin]=useState(true)
  return (
    <div className="App">
     {showadmin&&<NewsNavBar />} 
      <Routes>
        <Route path='/' element={<NewsBody />}></Route>
        {/* <Route path='/login' element={<NewsLogin />}></Route> */}
        <Route path='/auth' element={<NewsAuth/>}></Route>
        <Route path='/register' element={<NewsAuth Register/>}></Route>
        <Route path='/dashbord' element={<NewsDashBoard />}></Route>
        <Route path='/addnewslist' element={<AddNewsList />}></Route>
        <Route path='/listcomment' element={<ListCommand />}></Route>
        <Route path='/NewsReport' element={<NewsReport />}></Route>
        <Route path='/admindasboard' element={<Admin setshowadmin={setshowadmin}/>}></Route>
        <Route path='/userList' element={<UserList setshowadmin={setshowadmin}/>}></Route>
        <Route path='/newsList' element={<NewsList setshowadmin={setshowadmin}/>}></Route>
        <Route path='/adminDasboardNew' element={<AdminDash setshowadmin={setshowadmin}/>}></Route>
        Prithwiraj
      </Routes>
      {showadmin&&<NewsFooter/>}
      
    </div>
  );
}

export default App;
