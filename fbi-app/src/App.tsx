import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SuspectDetail from './pages/SuspectDetail';
import SuspectRegister from './pages/SuspectRegister';
import SuspectList from './pages/SuspectsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SuspectList />} />
        <Route path='/details' element={<SuspectDetail />} />
        <Route path='/register' element={<SuspectRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
