//CSS
import './App.css';

//Components
import Navbar from './components/Navbar';
import Form from './components/Form';

//Pages
import Home from "./pages/Home"
import Students from './pages/Students';
import Solutions from './pages/Solutions';
import Confirmation from './pages/Confirmation';

//Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/formulario' element={<Form />} />
          <Route path='/students' element={<Students />} />
          <Route path='/solutions' element={<Solutions/>} />
          <Route path='/confirmation' element={<Confirmation/>} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
