import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SuspectDetail from './pages/SuspectDetail';
import SuspectRegister from './pages/SuspectRegister';
import SuspectList from './pages/SuspectsList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<SuspectList />} />
        <Route path='/details' element={<SuspectDetail />} />
        <Route path='/register' element={<SuspectRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
