import './App.css';
import NewsBody from './Component/NewsBody';
import NewsFooter from './Component/NewsFooter';
import NewsNavBar from './Component/NewsNavBar';
import '../src/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NewsLogin from './Pages/NewsLogin';

function App() {
  return (
    <div className="App">
      <NewsNavBar />
      <Routes>
        <Route path='/' element={<NewsBody />}></Route>
        <Route path='/login' element={<NewsLogin />}></Route>
        Prithwiraj
      </Routes>
      <NewsFooter />
    </div>
  );
}

export default App;
