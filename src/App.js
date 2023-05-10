import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Cal from './component/calculator';
import Generator from './component/fetchAPI';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Cal />} />
        <Route path="/quotes" element={<Generator />} />
      </Routes>
    </div>

  );
}
export default App;
