import { Routes, Route } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
import Home from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<FavoritePage />} />
    </Routes>
  );
}

export default App;
