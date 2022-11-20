import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Recording from './pages/recording/Recording';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recording' element={<Recording/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
