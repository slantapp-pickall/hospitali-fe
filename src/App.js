import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<NavBar/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
