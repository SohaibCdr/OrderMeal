
import Cartes from './Components/Cartes'
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import SignUp from './Pages/SignUp';
import { RestaurantsPage } from './Pages/Resturants'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Dishes from '../src/Pages/Dishes';
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/restaurants' element={<RestaurantsPage />} />
      <Route path="/dishes" element={<Dishes />} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  </Router>
);

export default App;