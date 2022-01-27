import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DashboardProject from './components/Projects';
import DashboardProduct from './components/Products';

// import Esteem from './components/service_esteem/Esteem';
// import Result from './components/service_esteem/Result';
import ControlPanel from './pages/ControlPanel';
import Navbar from './components/navbar/Navbar';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';

function App() {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.includes('/control-panel') && <Navbar />}
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        {/* <Route path='/esteem' element={<Esteem />} /> */}
        {/* <Route path='/result' element={<Result />} />*/}
        <Route element={<PrivateRoute />}>
          <Route path='/control-panel' element={<ControlPanel />}>
            <Route path='/control-panel' element={<Dashboard />} />
            <Route path='/control-panel/products' element={<DashboardProduct />} />
            <Route path='/control-panel/projects' element={<DashboardProject />} />
            {/*<Route path='/control-panel/userEsteem' element={<UserEsteem />} /> */}
          </Route>
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
