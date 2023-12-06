import './App.css';
import NewsBody from './Component/NewsBody';
import NewsFooter from './Component/NewsFooter';
import NewsNavBar from './Component/NewsNavBar';
import '../src/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NewsLogin from './Pages/NewsLogin';
import NewsAuth from './Component/NewsAuth';
import NewsDashBoard from './Pages/NewsDashBoard';
import ListCommand from './Component/ListCommand';
import AddNewsList from './Component/AddNewsList';

function App() {
  return (
    <div className="App">
      <NewsNavBar />
      <Routes>
        <Route path='/' element={<NewsBody />}></Route>
        {/* <Route path='/login' element={<NewsLogin />}></Route> */}
        <Route path='/auth' element={<NewsAuth/>}></Route>
        <Route path='/register' element={<NewsAuth Register/>}></Route>
        <Route path='/dashbord' element={<NewsDashBoard />}></Route>
        <Route path='/addnewslist' element={<AddNewsList />}></Route>
        <Route path='/listcomment' element={<ListCommand />}></Route>
        Prithwiraj
      </Routes>
      <NewsFooter />
    </div>
  );
}

export default App;
